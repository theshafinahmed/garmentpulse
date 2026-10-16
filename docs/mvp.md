# GarmentPulse - MVP Plan

**Project:** GarmentPulse
**Course:** CSE327, Group 2
**Document purpose:** This file explains, in simple words, **which features** go into the first working version (the MVP), **which ones wait** for later, and **in what order** we build them. Anyone reading it later should know what the MVP is and why, without asking the team.

**Related documents:**

- [prd.md](prd.md) - **what** the full app should do (all features, including the ones cut here).
- [architecture.md](architecture.md) - **how** the app is built (technology and quality rules).
- [plan.md](plan.md) - **who** builds it and **when** (schedule and team).

---

## 1. What is the MVP?

The MVP is the **smallest version that still solves the first part of the main problem**: a machine breaks, a worker reports it, the manager sends a free technician, and the technician fixes it and updates the status.

If the MVP works end to end, the team has proof that the idea works. Everything else is added after that.

**The MVP goal in one sentence:**
> A worker reports a broken machine, the manager sends a free technician, the technician fixes it and updates the status, and the owner can watch it all.

---

## 2. Features in the MVP

Each feature below comes from [prd.md](prd.md). The number (for example FR-01) links back to the PRD.

### 2.1 Login and roles (must have)

- Each person logs in with email and password.
- The app knows the role: **worker, technician, manager or owner**.
- Each role only sees and does what it is allowed to do. The server checks this, not only the app (see NFR-02 in [architecture.md](architecture.md)).

### 2.2 Report a machine problem (FR-01)

- The worker picks the **machine** from a simple dropdown.
- The worker types a short **description** of the problem.
- The worker can see the **status** of their own reports (for example: waiting, in progress, resolved).

### 2.3 Manager dashboard and dispatch (FR-02)

- The manager sees **all reports** in one list. New reports show up live.
- The manager sees each technician as **free** or **busy**.
- The manager **assigns a free technician** to a report.
- If all technicians are busy, the report waits in a **queue**.

### 2.4 Technician job list and status (FR-03)

- The technician sees **jobs assigned to them**.
- The technician can **accept** a job and change its status (waiting, in progress, resolved).
- Each status change is visible to the **worker** and the **manager**.
- The technician can see their **past jobs**.

### 2.5 Owner view (read-only)

- The owner logs in on the **web app**.
- The owner can **see all reports and their status**. This is for watching only.
- The owner cannot approve, change or assign anything in the MVP. Approval comes later (see section 3).

### 2.6 Simple language support (section 5 of PRD)

- The app has **2 languages: Bangla and English**.
- The language **switch is small** and sits in the **top-right corner** of the app, on every screen. It is a small, simple button, not a big one.
- **Big buttons** and **simple dropdowns** for the main actions.
- **Colour-coded status** (for example: waiting = yellow, in progress = blue, resolved = green).

---

## 3. Features NOT in the MVP (for later)

These are in the full PRD but are **moved to later versions** to keep the first version small.

| Feature | PRD reference | Why it waits |
|---|---|---|
| Invoice and receipt for expenses (technician uploads the cost, manager records it, "no receipt, no expense") | FR-04 | Money handling is a second step. The first version proves the report-and-repair flow. |
| Owner approval for big costs (expense limit set by the owner, blocked until approved) | FR-05 | It depends on expenses, which are not in the MVP yet. |
| Simple AI chatbot (worker help, technician tips, manager and owner questions) | FR-07 | Not needed to prove the main flow. It is added after the core flow works. |
| Voice input for reports | FR-01 | Speech in Bangla and English is extra work. Typing works first. |
| Camera presence monitoring | FR-06 | Needs camera hardware and a detection service. It is also a paid-only feature. |
| Free and paid versions (subscription) | Section 6 | No payment or billing needed to test the main idea. |
| 12-month history limit and user limits | Section 6, NFR-04 | Not needed for the first test. |
| Push notifications to phones | FR-05, FR-06 | Can start with in-app status updates only. |

**Out of scope everywhere (already in PRD section 7):** stock, production planning, payroll, face recognition.

---

## 4. Build order

We build in this order so each step can be tested before the next one starts:

1. **Login and roles** - everyone can log in and see only their own screens.
2. **Report a problem** - worker creates a report, sees its status.
3. **Manager dashboard and dispatch** - manager sees reports, assigns free technicians, queue works.
4. **Technician jobs and status** - technician accepts jobs and updates status. Worker, manager and owner see the change.
5. **Owner view** - owner sees all reports and their status (read-only).
6. **Language switch and simple style** - Bangla / English switch in the top-right corner and colour status on every screen.

Test each step before moving on. Step 6 can run in parallel with steps 3 to 5 if needed.

---

## 5. Done means done (MVP checklist)

The MVP is finished when all of these are true:

- [ ] A worker can log in, report a machine problem, and see its status.
- [ ] The manager sees the report within **5 seconds** (see NFR and FR-01 in [prd.md](prd.md)).
- [ ] The manager can assign a free technician, and the report waits in a queue when all are busy.
- [ ] A technician can accept a job, change its status, and see past jobs.
- [ ] The owner can see all reports and their status on the web app, but cannot change anything.
- [ ] A worker cannot open owner or manager screens, even by typing the address.
- [ ] The main screens work in both Bangla and English.

---

## 6. Open decisions

These are not decided yet. The team should answer them before building the related step.

- **Platform for the first test:** Decided: the worker and technician mobile apps are tested on **both Android and iPhone**. The owner uses the web app, so there is no owner mobile app.
- **Voice input:** Decided: it waits for a later version.
- **Chatbot, invoice and receipt, owner approval:** Decided: all three wait for a later version (see section 3).
- **Owner expense limit:** Not needed for the MVP. It comes back with owner approval later.
- **Subscription price:** Still an estimate in [prd.md](prd.md) section 9. Not needed for the MVP.
