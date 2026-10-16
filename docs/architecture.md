# GarmentPulse - Architecture

**Project:** GarmentPulse
**Course:** CSE327, Group 2
**Document purpose:** This file explains, in simple words, **how** GarmentPulse is built: which technologies are used, how the parts connect, and the quality rules the system must meet. Anyone reading it later should understand the structure of the system without asking the team.

**Related documents:**

- [prd.md](prd.md) - **what** the app does and **who** uses it (features, users, pricing).
- [plan.md](plan.md) - **who** builds it and **when** (schedule, team, risks).
- [mvp.md](mvp.md) - **which part** of this architecture is built first (the MVP).

> **Note:** This file describes the **full** system. The first version (the MVP) builds only part of it. See section 6 for what is in and what waits.

---

## 1. The big picture

GarmentPulse is made of **four parts** that talk to each other.

| Part | What it is | What it does |
|---|---|---|
| **Client layer** | The apps people see and touch | Worker and technician mobile app, manager web dashboard, owner web dashboard |
| **Backend layer** | The "brain" behind the apps (Supabase) | Login and role checks, problem reports, dispatch and expenses, owner approval, presence alerts, and the AI chatbot connection |
| **Database** | Where information is stored (PostgreSQL) | Stores users, reports and expenses |
| **Camera system** | IP cameras in the factory | Sends presence data (person or no person at a seat) to the backend |

**How they connect:**

- The apps in the client layer send requests to the backend.
- The backend checks who the user is and what they are allowed to do, then reads from or writes to the database.
- The cameras send presence data to the backend, which raises alerts when needed.
- The backend talks to the AI chatbot service on behalf of the apps.

---

## 2. Technology

| Part | Technology |
|---|---|
| Mobile app (worker, technician) | React Native |
| Web app (manager, owner) | Next.js (React) |
| Backend, login and API | Supabase (auth and auto-generated REST API) |
| Database | PostgreSQL (through Supabase) |
| AI chatbot | Google Gemini API (called securely from the Supabase backend) |
| Camera | IP cameras with a presence-detection service |
| Code and hosting | Git, GitHub, Vercel |
| Tools | Postman (API testing), Figma (design) |

---

## 3. Which user gets which app

| User | Platform | Built with |
|---|---|---|
| **Worker** | Mobile app | React Native |
| **Technician** | Mobile app | React Native |
| **Manager** | Web app (dashboard) | Next.js |
| **Owner** | Web app (dashboard) | Next.js |

---

## 4. Quality rules (non-functional requirements)

Each rule is marked **MUST** (needed for the first version) or **SHOULD** (nice to have).

- **NFR-01 (SPEED, MUST):** The app responds within **2 seconds**. It supports at least **100 users at the same time** per factory site.
- **NFR-02 (SECURITY, MUST):** Access is checked by **role on the server**. A worker must not be able to do an owner's job, even by trying.
- **NFR-03 (PLATFORMS, MUST):**
  - Worker and technician features: **mobile app**.
  - Manager features: **web app**.
  - Owner features: **web app**.
- **NFR-04 (HISTORY, SHOULD):** Keep reports, assignments and expense history for at least **12 months**.

---

## 5. Important design rules

These rules come from the features in [prd.md](prd.md) and shape how the system is built.

- **Role checks happen on the server.** The apps never decide on their own what a user is allowed to do (see NFR-02).
- **The AI chatbot is called from the backend.** The apps do not talk to the Google Gemini API directly. The Supabase backend makes the call securely.
- **Cameras detect presence only.** The camera system reports "person" or "no person" for a seat. It does not identify who the person is. Face recognition is out of scope.
- **Reports must travel fast.** A new report appears on the manager's dashboard within **5 seconds**.
- **The owner's expense limit is a setting, not fixed code.** The owner can change it from the app, so the amount is stored as data.
- **Camera monitoring is a subscription feature.** It is switched on only for factories on the paid version.

---

## 6. What the MVP builds from this architecture

The MVP is the first working version (see [mvp.md](mvp.md)). It uses the same technology and rules as above, but builds only these parts.

| Part | In the MVP? | Notes |
|---|---|---|
| Mobile app (React Native) | **Yes** | Worker and technician. Tested on Android and iPhone. |
| Manager web dashboard (Next.js) | **Yes** | Live report list, technician free/busy, assign, queue. |
| Owner web app (Next.js) | **Yes** | A **read-only view** of all reports and their status. Approval comes later. |
| Backend and database (Supabase, PostgreSQL) | **Yes** | Login, roles, reports, dispatch, queue, job status. |
| Expenses, invoices and owner approval | Later | Comes after the report-and-repair flow works. |
| AI chatbot (Google Gemini) | Later | Still called only from the backend when it is built. |
| Camera system | Later | Paid feature, not needed to prove the main idea. |

**Quality rules in the MVP:**

- NFR-01 (speed) and NFR-02 (role checks on the server) apply fully.
- NFR-03 (platforms) applies fully. In the MVP the owner has a read-only view on the web app.
- NFR-04 (history) is not needed for the first test.
