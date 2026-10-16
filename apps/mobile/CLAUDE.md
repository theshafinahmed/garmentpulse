# CLAUDE.md for `apps/mobile/` (GarmentPulse Mobile)

This file is read when a session works inside `apps/mobile/`. It adds to the root [`CLAUDE.md`](../../CLAUDE.md), it does not replace it. **The root rules (simple language, lanes, git rules) still apply here.**

## Whose folder is this?

- **Owner of this folder: Rubaiya.** Only Rubaiya's sessions change files here.
- If you are working for Mithi or Sakib, you may **read** this folder but must **not change** it. Tell the person who owns it instead.
- Not sure who you are working for? Read `CLAUDE.local.md` in the top folder, or ask.

## What this app is

**GarmentPulse Mobile** is the phone app for **workers** and **technicians**. It is built with React Native (Expo) and TypeScript, and must work on both Android and iPhone.

- **Worker** can: log in, pick a machine from a simple dropdown, type a short description of the problem, send the report, and see the live status of their own reports.
- **Technician** can: log in, see the jobs assigned to them, accept a job, change its status (waiting, in progress, resolved), and see their past jobs.
- Only **worker and technician accounts** work here. A manager or owner who logs in must be signed out with a clear message (error code `WRONG_PLATFORM`). Managers and owners use the web app.
- **Both languages (Bangla and English)** are needed on the main screens. The language switch is a small pill button in the **top-right corner of every screen**.
- Buttons are **48 px tall**, nothing tappable is smaller than 44 px, and status colours always come with a word. Follow [`docs/design-system.md`](../../docs/design-system.md) for colours, fonts and icons.
- Not in the MVP: voice input, invoices and receipts, the AI chatbot, push notifications, dark mode. Do not build them.

## Read before you build

| Need | Read |
|---|---|
| What the product must do | [`docs/prd.md`](../../docs/prd.md) and [`docs/mvp.md`](../../docs/mvp.md) |
| Exact backend functions, inputs, results, error codes | [`docs/api-contract.md`](../../docs/api-contract.md) |
| How the screens should look | [`docs/design-system.md`](../../docs/design-system.md) |
| How the whole system fits together | [`docs/architecture.md`](../../docs/architecture.md) |

## How this app talks to the backend

- **Only call the functions listed in `docs/api-contract.md`**, with the exact names and inputs written there.
- **Never write to database tables directly.** The backend functions do the checking.
- Once it exists, use the ready-made wrappers in `packages/shared` instead of typing function names by hand.
- **Turn error codes into friendly sentences** in this app's own screen text (in both languages). Never show a raw code like `TECHNICIAN_BUSY` to a person.
- Until a function is built, you may build against a fake version that returns the shapes from Section 3 of the contract. Keep fakes inside `apps/mobile/`.
- **Never put secret keys in code.** Keys go in a local `.env` file that is not shared.

## Needs something outside this folder?

- A new or changed backend function, a database change, or a change in `packages/shared`: **ask Sakib.** Write a short, plain note in `requests/sakib/` (layout in `requests/README.md`), tell Rubaiya about it, and keep going with fake data from `@garmentpulse/shared`. Do not edit those folders yourself.
- A change to the plan documents or the root `CLAUDE.md`: suggest it in a pull request and mark it as needing Sakib's review.

## Working style for this folder

- At the start of a session, follow the start checklist in the root `CLAUDE.md` (who am I, pull, install, mailbox, status). Before you finish, update [`STATUS.md`](./STATUS.md) in this folder.
- Use the fake data in `@garmentpulse/shared` (`FAKE_MACHINES`, `FAKE_REPORTS`, `FAKE_TECHNICIANS`) and the words in its `labels.ts`. Do not make your own copies.
- Every file starts with a short comment saying what it is for, in plain words.
- Keep screens simple. Prefer small files that do one thing.
- Work on a branch with the right prefix (see the root rules). Never push to `main`.

## Status

The Expo project exists and shows a simple "hello" screen. It is connected to `@garmentpulse/shared`. No real screens yet. Start it with `npm run start --workspace @garmentpulse/mobile` (see "Getting Started" in the root `CLAUDE.md`). Docker is not needed for this app.
