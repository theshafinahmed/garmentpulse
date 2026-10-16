# GarmentPulse API Contract

**Status:** Draft v1 (the backend does not exist yet; every function below is `planned`)
**Owner:** Sakib (backend). Changes need Sakib's review. Rubaiya and Mithi review this draft too (plan step ★2).
**Last updated:** 2026-10-16
**Source of truth for product rules:** [`prd.md`](./prd.md) and [`mvp.md`](./mvp.md). **For how things are built:** [`architecture.md`](./architecture.md).

---

## 1. What This File Is (In Plain Words)

The two apps (GarmentPulse Mobile and GarmentPulse Web) and the backend are built by different people. This file is the **written agreement between them**, like a restaurant menu:

- The backend (kitchen) promises to offer these "dishes" (functions).
- The apps (customers) order them using the exact names and details written here.

So Rubaiya and Mithi can build their screens **with fake data and without waiting for the backend**, and Sakib can build the backend **without guessing what the apps need**.

Rules for this file:

- If this file and the PRD or MVP plan disagree about a **product rule**, they win. Fix this file.
- Function names, input names, and error codes here are **exact**. Do not rename them in app code.
- **Adding** a new function is allowed through a pull request that Sakib reviews. **Changing or removing** an existing one must be announced to Rubaiya and Mithi first.
- Items marked **(proposed)** are new ideas added while writing this contract. They are not in `architecture.md` yet. Sakib must confirm them.
- This contract covers **only the MVP** (see [`mvp.md`](./mvp.md)). Invoices, owner approval, the chatbot, voice, and camera alerts get their own functions later.

---

## 2. Ground Rules for Calling the Backend

### 2.1 How a call looks

The backend is Supabase. Apps call a function like this (TypeScript):

```ts
const { data, error } = await supabase.rpc('create_report', {
  machine_id: '0b2c…',
  description: 'The needle keeps breaking',
});
```

(`rpc` means "remote procedure call": the app asks the database to run one of its ready-made functions.)

- Input names are `snake_case`, exactly as written in this file.
- The apps **never write to tables directly**. They only call functions (architecture NFR-02: roles are checked on the server).
- Every function needs a logged-in user. A call without login fails with `NOT_AUTHENTICATED`.

### 2.2 Errors

When something is wrong, the call returns `error`. Its **`error.message` is a short code in CAPITALS** (for example `TECHNICIAN_BUSY`). The app must **turn the code into a friendly sentence in its own screen text, in both Bangla and English**. Apps never show the raw code to users.

The full list of codes is in Section 6.

### 2.3 Lists

- Lists (reports, machines, technicians) come back in full, newest first. The MVP has no paging.
- **(proposed)** If a factory grows large, paging is added later without changing the names here.

### 2.4 Live updates (Realtime)

A new or changed report must reach the manager's screen **within 5 seconds** (FR-01). Apps get this by subscribing to Supabase Realtime on the `reports` table. Realtime only sends rows the person is allowed to see, so the same security rules apply. Details are in Section 7.

### 2.5 Who is who

| Role | App | Short meaning |
|---|---|---|
| `worker` | Mobile | Reports broken machines |
| `technician` | Mobile | Repairs machines |
| `manager` | Web | Sees all reports, assigns technicians |
| `owner` | Web | Watches everything, read-only in the MVP |

A role may only use its own app. Logging in on the wrong app fails with `WRONG_PLATFORM`.

### 2.6 Report statuses

Everyone uses the same three words: `waiting`, `in_progress`, `resolved`.

- A report is **in the queue** when its status is `waiting` and `technician` is `null` (nobody has been assigned yet).
- A report is **assigned** when `technician` is set. It stays `waiting` until the technician starts work.
- Allowed moves: `waiting` → `in_progress` → `resolved`. Nothing moves backwards. `resolved` is final.

### 2.7 Not in the MVP

Invoices and receipts, owner approval and the expense limit, the AI chatbot, voice input, camera presence alerts, push notifications, free/paid plans, and the 12-month history limit.

---

## 3. Data Shapes

These are copied into `packages/shared/src/types.ts`. If they ever disagree, this file wins.

```ts
type Role = 'worker' | 'technician' | 'manager' | 'owner';
type Platform = 'mobile' | 'web';
type ReportStatus = 'waiting' | 'in_progress' | 'resolved';
type TechnicianAvailability = 'free' | 'busy';

type Profile = { id: string; display_name: string; email: string; role: Role };

type Machine = { id: string; name: string };

type Report = {
  id: string;
  machine: { id: string; name: string };
  description: string;
  status: ReportStatus;
  reported_by: { id: string; display_name: string };
  technician: { id: string; display_name: string } | null; // null = not assigned yet
  accepted_at: string | null; // set when the technician accepts the job
  created_at: string; // ISO date and time
  updated_at: string;
};

type Technician = { id: string; display_name: string; availability: TechnicianAvailability };

type OwnerSummary = { waiting: number; in_progress: number; resolved: number };
```

A technician is **busy** when they have at least one assigned report that is not `resolved`, and **free** otherwise. The backend calculates this when reading. It is never stored.

---

## 4. Functions

### 4.1 Account and login

#### Log in (Supabase Auth, no custom function)

Email and password. After login the app calls `get_my_profile()`. If the person's role does not belong to this app, the app must sign out and show the message for `WRONG_PLATFORM`.

#### `get_my_profile()` — Mobile, Web

- **Inputs:** none
- **Returns:** `Profile`
- **Errors:** `NOT_AUTHENTICATED`

### 4.2 Machines

#### `list_machines()` — Mobile (worker), Web (manager)

- **Inputs:** none
- **Returns:** `Machine[]` (sorted by name). Feeds the worker's dropdown.
- **Errors:** `NOT_AUTHENTICATED`, `NOT_ALLOWED` (technician and owner do not need it)

### 4.3 Reports

#### `create_report(machine_id, description)` — Mobile (worker)

- **Inputs:** `machine_id` (text), `description` (text, 1 to 500 characters after trimming)
- **Returns:** `Report` (status `waiting`, `technician` null: it enters the queue)
- **Errors:** `NOT_AUTHENTICATED`, `NOT_ALLOWED` (not a worker), `NOT_FOUND` (no such machine), `INVALID_INPUT`

#### `list_my_reports()` — Mobile (worker)

- **Inputs:** none
- **Returns:** `Report[]` (only the worker's own reports)
- **Errors:** `NOT_AUTHENTICATED`, `NOT_ALLOWED`

#### `list_reports(status?)` — Web (manager, owner)

- **Inputs:** `status` (optional: one of the three statuses)
- **Returns:** `Report[]` (all reports of the factory)
- **Errors:** `NOT_AUTHENTICATED`, `NOT_ALLOWED` (worker or technician), `INVALID_INPUT`

#### `get_report(report_id)` — Mobile, Web

- **Inputs:** `report_id`
- **Returns:** `Report`
- **Who may see it:** the worker who made it, the technician it is assigned to, the manager, the owner.
- **Errors:** `NOT_AUTHENTICATED`, `NOT_FOUND` (also used when the person may not see it, so nobody can probe for report ids)

### 4.4 Dispatch (manager)

#### `list_technicians()` — Web (manager)

- **Inputs:** none
- **Returns:** `Technician[]` with `availability` (`free` or `busy`)
- **Errors:** `NOT_AUTHENTICATED`, `NOT_ALLOWED`

#### `assign_technician(report_id, technician_id)` — Web (manager)

- **Inputs:** `report_id`, `technician_id`
- **Returns:** `Report` (with `technician` set; status stays `waiting` until the technician starts)
- **Rules:** the technician must be **free**. The report must not be `resolved` and must not already have a technician.
- **Errors:** `NOT_AUTHENTICATED`, `NOT_ALLOWED`, `NOT_FOUND`, `TECHNICIAN_BUSY`, `REPORT_ALREADY_ASSIGNED`, `INVALID_STATUS_CHANGE` (report already resolved)

### 4.5 Technician jobs

#### `list_my_jobs(include_past?)` — Mobile (technician)

- **Inputs:** `include_past` (optional true/false, default false)
- **Returns:** `Report[]` assigned to this technician. With `include_past` true, resolved jobs are included too (this is the "past jobs" list).
- **Errors:** `NOT_AUTHENTICATED`, `NOT_ALLOWED`

#### `accept_job(report_id)` — Mobile (technician)

- **Inputs:** `report_id`
- **Returns:** `Report` (with `accepted_at` set; status is still `waiting`)
- **Errors:** `NOT_AUTHENTICATED`, `NOT_ALLOWED` (not a technician, or the report is assigned to someone else), `NOT_FOUND`, `JOB_ALREADY_ACCEPTED`

#### `update_job_status(report_id, status)` — Mobile (technician)

- **Inputs:** `report_id`, `status` (`in_progress` or `resolved`)
- **Returns:** `Report`
- **Rules:** the technician must have accepted the job first. Moves go forward only (`waiting` → `in_progress` → `resolved`). A technician may jump straight from `in_progress` to `resolved`.
- **Errors:** `NOT_AUTHENTICATED`, `NOT_ALLOWED`, `NOT_FOUND`, `JOB_NOT_ACCEPTED`, `INVALID_STATUS_CHANGE`, `INVALID_INPUT`

### 4.6 Owner view

#### `get_owner_summary()` — Web (owner)

- **Inputs:** none
- **Returns:** `OwnerSummary` (the three count boxes: Waiting, In progress, Resolved)
- **Errors:** `NOT_AUTHENTICATED`, `NOT_ALLOWED`

The owner's list of reports uses `list_reports(status?)`. The owner has no function that changes anything.

---

## 5. Who Calls What

| Function | Worker (Mobile) | Technician (Mobile) | Manager (Web) | Owner (Web) |
|---|---|---|---|---|
| `get_my_profile` | yes | yes | yes | yes |
| `list_machines` | yes | no | yes | no |
| `create_report` | yes | no | no | no |
| `list_my_reports` | yes | no | no | no |
| `list_reports` | no | no | yes | yes (read-only) |
| `get_report` | own | assigned | yes | yes |
| `list_technicians` | no | no | yes | no |
| `assign_technician` | no | no | yes | no |
| `list_my_jobs` | no | yes | no | no |
| `accept_job` | no | yes | no | no |
| `update_job_status` | no | yes | no | no |
| `get_owner_summary` | no | no | no | yes |

---

## 6. Error Codes

| Code | Plain meaning |
|---|---|
| `NOT_AUTHENTICATED` | The person is not logged in (or the login has expired). |
| `WRONG_PLATFORM` | The person's role belongs to the other app (for example a manager logging in on the phone app). |
| `NOT_ALLOWED` | The person's role may not do this. |
| `NOT_FOUND` | The machine, report, or technician does not exist, or the person may not see it. |
| `INVALID_INPUT` | An input is missing, empty, too long, or not one of the allowed values. |
| `TECHNICIAN_BUSY` | The chosen technician already has an unfinished job. |
| `REPORT_ALREADY_ASSIGNED` | The report already has a technician. |
| `JOB_NOT_ACCEPTED` | The technician must accept the job before changing its status. |
| `JOB_ALREADY_ACCEPTED` | The technician already accepted this job. |
| `INVALID_STATUS_CHANGE` | That status move is not allowed (backwards, or the report is already resolved). |

These codes live in `packages/shared/src/errors.ts`.

---

## 7. Live Updates and Alerts

- **Realtime (live updates):** the apps subscribe to changes on `reports`. A new report, a new assignment, and every status change reach the worker, technician, manager, and owner who are allowed to see that report, within 5 seconds.
- **Technician availability** changes whenever a job is assigned or resolved. The manager's screen must refresh the free/busy list when a report changes.
- **Push notifications** are not in the MVP. In-app live updates are enough.

---

## 8. Decisions and Open Questions

### Proposed while writing this contract (Sakib must confirm)

1. **Accepting a job does not change the status.** `accept_job` sets `accepted_at`; the status stays `waiting` until the technician moves it to `in_progress`. This keeps the "3 statuses only" rule from the design system.
2. **The queue is not a status.** A queued report is `waiting` with no technician.
3. **One factory in the MVP.** Everyone belongs to one factory, so no function takes a factory id. Several factories can be added later.
4. **No auto-assign.** When a technician becomes free, the manager assigns the next queued report by hand.

### Still open (the team must answer before the related step)

- **How do accounts and roles get created?** Does the owner or manager add people, or do people sign up and get a role later? The PRD does not say. (Affects Round 1, login and roles.)
- **Where do the machines come from?** Is the machine list typed in by hand into the database for the MVP? (Proposed answer: yes, as test data.)
- **Word list (plan step ★3):** the exact Bangla and English words for the three statuses and the free/busy labels are still to be agreed.
- **Can a manager reassign a report** after it was assigned? Not in this draft.

---

## 9. How This File Will Be Used

1. Rubaiya and Mithi build screens against **fake data** that has exactly the shapes in Section 3.
2. Sakib builds the real functions to match Sections 4 and 6.
3. In Round 4 (★4), the apps swap fake data for real calls. Nothing should need renaming, because the names are already agreed here.
4. Database tests check every function against this file.
