# GarmentPulse - Project Plan

**Project:** GarmentPulse
**Course:** CSE327, Group 2
**Document purpose:** This file explains, in simple words, **who** builds GarmentPulse, **when** each part is built, how the work is shared between the three of us, and what could go wrong along the way. Anyone reading it later should understand how the project was organized without asking the team.

**Related documents:**

- [prd.md](prd.md) - **what** the app does and **who** uses it (features, users, pricing).
- [architecture.md](architecture.md) - **how** the app is built (technology, structure, quality rules).
- [mvp.md](mvp.md) - **which features** are in the first version and which wait.
- [api-contract.md](api-contract.md) - **the agreement** between the apps and the backend.

---

## 1. Schedule

The first goal is the **MVP** (see [mvp.md](mvp.md)). The MVP has no chatbot, no expenses and no owner approval, so it is smaller than the original 8-week plan. The aim is to finish it **as soon as possible**.

Because there are no fixed calendar dates, the work runs in **rounds**. A round is finished when everyone's part of it is done and tested. Each round ends with a short review together.

| Round | Phase | What happens |
|---|---|---|
| 0 | Design together | Database, permissions, API agreement, word list (shared work) |
| 1 | Foundations | Login and roles, report a problem |
| 2 | Core flow | Dispatch and queue, technician jobs, owner read-only view |
| 3 | Polish | Language switch, colour status, tests |
| 4 | Connect | Replace fake data with the real backend (shared work) |
| 5 | Finish | Full-flow test, security test, demo and presentation (shared work) |

After the MVP, the later features in [mvp.md](mvp.md) section 3 (invoices, owner approval, chatbot, and so on) are planned as a second step.

---

## 2. Team and work split

There is one owner per layer of the stack. All members help with system design, testing and the final presentation.

| Member | Role | Main work |
|---|---|---|
| Rubaiya Binte Reza | Mobile app developer | React Native apps for workers and technicians |
| Rukaia Minhaz Mithi | Web app developer | Next.js manager dashboard and owner web app (read-only) |
| Md. Sakibuzzaman | Backend developer | Supabase schema, login, role logic, technician dispatch |

---

## 3. Distribution plan (MVP)

**Goal:** each person can work **independently** in their own folder. The work we must do **together** is marked with a star (★).

### 3.1 Rules for working independently

- One repository with one folder each: **supabase/** (Sakib, the backend), **apps/mobile/** (Rubaiya), **apps/web/** (Mithi). Code both apps use lives in **packages/shared/** (Sakib). Shared notes live in **docs/**. The strict rules for lanes are in the root `CLAUDE.md`.
- Each person works on their own branch and does not edit another person's folder.
- Rubaiya and Mithi use **fake (mock) data** until the backend is ready, so nobody waits.
- Sakib provides **test data** and a **Postman collection** early, so the apps can be checked against the real backend.
- Every branch passes its tests before it is pushed. Pull requests are squash-merged.

### 3.2 Individual work

| Area | Sakib (backend) | Rubaiya (mobile, Android and iPhone) | Mithi (web) |
|---|---|---|---|
| **Login and roles** | Supabase login, 4 roles, role checks on the server | Login screen | Login page |
| **Report a problem** | Reports table, machine list, status rules | Worker: pick machine, describe problem, see own report status | - |
| **Dispatch and queue** | Free/busy logic, queue when all are busy, live updates within 5 seconds | - | Manager dashboard: live list, technician free/busy, assign button, queue view |
| **Technician jobs** | Job assignment and status-change rules, past jobs | Technician: my jobs, accept, change status, past jobs | - |
| **Owner view** | Read-only access rules for the owner | - | Owner web app: see all reports and their status |
| **Language and colours** | - | Language switch (top-right) and colour status on mobile | Language switch (top-right) and colour status on web |
| **Quality** | Backend tests, test data, Postman collection | Mobile tests on Android and iPhone | Web tests |

### 3.3 Shared work together (★)

| Step | Shared work | Why it needs all three |
|---|---|---|
| ★1 | Database design and the "who can do what" table | Everyone depends on it, so we agree before any coding. |
| ★2 | The API agreement ([api-contract.md](api-contract.md)): what each screen asks for and gets back. **Sakib drafts it, all three review.** A first draft exists; the team still needs to review it. | It lets the apps use fake data while the real backend is built. |
| ★3 | Word list: status names, colours and Bangla/English text | The same words must appear on mobile and web. |
| ★4 | Connect the real backend to both apps | It is where the independent parts first meet. |
| ★5 | Full-flow test and security test ("a worker cannot open manager screens") | It is the MVP checklist in [mvp.md](mvp.md) section 5. |
| ★6 | Demo, documentation and the final presentation | One shared story for the course. |

### 3.4 Order of the work

| Round | Together (★) | Sakib | Rubaiya | Mithi |
|---|---|---|---|---|
| 0 | ★1, ★2, ★3 | - | - | - |
| 1 | - | Supabase setup, login and roles, role checks, test data | Login screen, worker report and "my reports" (fake data) | Login page, manager live list (fake data) |
| 2 | - | Dispatch, queue, live updates, job status rules, owner read-only rules | Technician jobs and status | Assign button, technician free/busy, queue view, owner web view (read-only) |
| 3 | - | Postman collection, backend tests | Language switch, colour status, tests on both phones | Language switch, colour status, web tests |
| 4 | ★4 | Fix backend issues found | Switch to real backend | Switch to real backend |
| 5 | ★5, ★6 | Together | Together | Together |

---

## 4. Risks and how we handle them

| Risk | How we handle it |
|---|---|
| All technicians are busy at once | Reports wait in a queue. The manager sees technician availability. |
| One person is blocked by another | Fake data and the agreed API (★2) let everyone work at the same time. |
| Parts do not fit together at the end | Shared design steps (★1 to ★3) come first, and ★4 connects the parts early. |
| Someone sees screens they should not | Role checks happen on the server, and ★5 tests it. |
| Scope creep (too many features) | Keep the first version to reporting, dispatch and status. Invoices, owner approval, chatbot and camera are later modules. |
| A technician misuses money (later) | Once expenses are built, every expense needs an invoice and receipt, and the owner approves expenses above the limit. |
| Camera accuracy and privacy (later) | Only detect presence, not identity. Tune the 10-minute rule. Inform workers that cameras are used. |
