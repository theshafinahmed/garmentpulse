# GarmentPulse - Product Requirements Document (PRD)

**Project:** GarmentPulse
**Course:** CSE327, Group 2
**Tagline:** Better Systems for a Stronger Garment Industry
**Document purpose:** This file explains, in simple words, **what** GarmentPulse is, **who** uses it, and **what features** it must have. Anyone reading it later should understand the product without asking the team.

**Related documents:**

- [architecture.md](architecture.md) - **how** the app is built (technology, structure, quality rules).
- [plan.md](plan.md) - **who** builds it and **when** (schedule, team, risks).

---

## 1. What is GarmentPulse?

GarmentPulse is an app for garment factories. A factory has many sewing, cutting and pressing machines, and many workers sitting at seats.

**The problem:** When a machine breaks, or a seat is empty, often nobody knows. Reports travel by word of mouth or on paper. Repair money is spent without proof.

**The solution:** GarmentPulse puts the whole process on one platform:

1. A **worker** reports a broken machine (by dropdown or voice).
2. The **manager** sees the report and assigns a free **technician**.
3. The **technician** accepts the job, repairs the machine, updates the status, and sends an invoice with a receipt.
4. The **owner** approves any expense that is too big, and can see everything happening in the factory.
5. **Cameras** watch each seat. If no one is at a seat for 10 minutes, the manager gets an alert.

---

## 2. Goals

- **Reduce downtime:** Get every machine problem to a technician within minutes.
- **Make spending traceable:** Every repair cost has an invoice and a receipt.
- **Control big spending:** Expenses above a limit wait for the owner's decision.
- **Watch seat presence:** Alert the manager when a seat is empty for 10 minutes.

---

## 3. Who uses the app?

There are **4 user types**.

| User | Where they use it | What they do |
|---|---|---|
| **Worker** | Mobile app | Reports problems by dropdown or voice. Tracks their report. |
| **Technician** | Mobile app | Sees assigned jobs, updates status, sends invoices and receipts. |
| **Manager** | Web app (dashboard) | Sees all reports, assigns technicians, reviews and records costs. |
| **Owner** | Web app (dashboard) | Approves high-cost expenses. Sees the overall picture of the factory. |

---

## 4. Features

Every feature below is marked **MUST** (needed for the first version) or **SHOULD** (nice to have).

### 4.1 Problem reporting (Worker)

- **FR-01 (MUST):** A worker can report a problem by:
  - picking the machine from a simple dropdown, or
  - choosing **"Other"** and speaking the problem (voice input).
- A report needs a machine and a description (typed or spoken).
- The report appears on the manager's dashboard within **5 seconds**.
- The worker can see the live status of their own report at any time.

### 4.2 Assigning technicians (Manager)

- **FR-02 (MUST):** The manager sees all reports live, understands the problem, and assigns an **available** technician.
- The dashboard shows every report and whether each technician is free or busy.
- If all technicians are busy, the report waits in a **queue**.
- The manager can see and update the status of every job.

### 4.3 Doing the repair (Technician)

- **FR-03 (MUST):** The technician gets new assignments on the mobile app.
- The technician accepts the job, starts work, and updates the status (for example: waiting, in progress, resolved).
- Each status change is visible to the **worker** and the **manager**.
- The technician can see their job history.

### 4.4 Invoices and expenses

- **FR-04 (MUST):** When a repair costs money, the technician sends an **invoice with a receipt**. The manager reviews it and records the expense.
- Every expense needs an invoice and a receipt. No receipt, no expense.

### 4.5 Owner approval

- **FR-05 (MUST):** Any expense **above a limit** must be approved by the **owner** before the manager can go ahead.
- The owner sees who asked, the amount, the reason, and the receipt before deciding.
- Expenses above the limit are **blocked** until the owner decides.
- The manager is notified after the owner decides, and can only proceed after approval.
- If the owner says no, the expense stays in the list with a **Rejected** label and the owner's short reason, so the manager always knows.
- **The limit is set in the owner's settings.** The owner can change it from the app. No fixed amount is written in this document.

### 4.6 Camera presence monitoring (Subscription feature)

- **FR-06 (MUST):** IP cameras watch each monitored seat and report whether a **person** or **no person** is there.
- If **no one** is detected at a seat for **10 minutes**, the **manager is alerted** and the **worker is notified** automatically.
- **Detection only.** The camera does not identify who a person is. It only checks if a seat is occupied.
- Camera presence monitoring is available **only in the paid subscription version**.

### 4.7 AI chatbot (All roles)

- **FR-07 (MUST):** One AI chatbot helps every role:
  - **Worker:** turns a voice note or text into a clean, categorized report.
  - **Technician:** suggests troubleshooting steps for the reported fault.
  - **Manager and Owner:** answers questions about reports, costs and presence alerts.
- The chatbot is available in the **free** version as well.

---

## 5. Language and ease of use

- The app supports **Bangla and English**.
- Every screen has a **Bangla / EN toggle**.
- Voice input works in **both Bangla and English**.
- **Easy-to-tap icon buttons** (at least 48 px tall on phones) and a **simple dropdown** are used, so no screen is confusing.
- **Color-coded status** (for example: waiting, in progress, resolved) helps everyone see the state at a glance.
- **Must-have rule:** Every important button must be easy to find and easy to understand. No hidden or confusing button flows.

---

## 6. Free and paid versions

| | Free version | Subscription version |
|---|---|---|
| Price | BDT 0 (no cost to start) | BDT 3,000 to 10,000 per factory per month, by factory size (estimate) |
| Machine problem reporting and technician dispatch | Yes | Yes |
| Expense, invoice and owner approval | Yes | Yes |
| AI chatbot for every role | Yes | Yes |
| Camera presence monitoring | **No** | **Yes** |
| Users | Limited | Unlimited |
| History | Limited | 12 months |

---

## 7. Out of scope (not in the first version)

To keep the first version small, these are **not** included:

- Stock or inventory management
- Production planning and order management
- Payroll and salary
- Identifying individual workers with the camera (face recognition)

---

## 8. Competitors and our difference

- **SmartERP:** Manages many factory parts (merchandising, production, inventory, purchasing, quality, finance, workforce) in one platform.
- **GarmentFlow:** Production software for garment factories.

**GarmentPulse focuses on one thing well:** machine breakdowns, from the first report to an owner-approved cost.

### What is new in GarmentPulse

1. **One maintenance workflow:** report, dispatch, repair and cost in one path.
2. **Manager-led dispatch:** assign free technicians, with a queue when everyone is busy.
3. **Owner approval gate:** high costs cannot go ahead without the owner.
4. **Receipt-backed expenses:** every repair cost needs an invoice and receipt.
5. **Camera presence alerts:** alert after 10 minutes with no one at a seat.
6. **One AI chatbot for all roles:** report helper, troubleshooting and cost answers.

---

## 9. Open items

These product decisions are not final yet:

- **Owner expense limit:** The actual BDT amount is not decided yet. The owner sets it in the app settings.
- **Subscription price:** The BDT 3,000 to 10,000 range is an estimate and must be confirmed.
