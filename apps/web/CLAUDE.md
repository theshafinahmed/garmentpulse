# CLAUDE.md for `apps/web/` (GarmentPulse Web)

This file is read when a session works inside `apps/web/`. It adds to the root [`CLAUDE.md`](../../CLAUDE.md), it does not replace it. **The root rules (simple language, lanes, git rules) still apply here.**

## Whose folder is this?

- **Owner of this folder: Mithi.** Only Mithi's sessions change files here.
- If you are working for Rubaiya or Sakib, you may **read** this folder but must **not change** it. Tell the person who owns it instead.
- Not sure who you are working for? Read `CLAUDE.local.md` in the top folder, or ask.

## What this app is

**GarmentPulse Web** is the website dashboard for **managers** and the **owner**. It is built with Next.js (a tool for building websites with React) and TypeScript.

- **Manager** can: log in, see all reports in one live list (new reports appear within 5 seconds), see each technician as free or busy, assign a free technician to a report, and see the queue (reports waiting because every technician is busy).
- **Owner** can: log in and see all reports and their status. This is **one read-only screen** with three count boxes on top (Waiting, In progress, Resolved) and no menu links. The owner cannot approve, change, or assign anything in the MVP.
- Only **manager and owner accounts** work here. A worker or technician who logs in must be signed out with a clear message (error code `WRONG_PLATFORM`). Workers and technicians use the phone app.
- A worker must not be able to open manager or owner pages, **even by typing the address**. The backend enforces this, but the pages must also redirect or refuse.
- **Both languages (Bangla and English)** are needed on the main pages. The language switch is a small pill button in the **top-right corner of every page**.
- Follow [`docs/design-system.md`](../../docs/design-system.md) for colours (manager blue, owner dark red), fonts and status labels.
- Not in the MVP: expense approval, the AI chatbot, camera alerts, dark mode. Do not build them.

## Read before you build

| Need | Read |
|---|---|
| What the product must do | [`docs/prd.md`](../../docs/prd.md) and [`docs/mvp.md`](../../docs/mvp.md) |
| Exact backend functions, inputs, results, error codes | [`docs/api-contract.md`](../../docs/api-contract.md) |
| How the pages should look | [`docs/design-system.md`](../../docs/design-system.md) |
| How the whole system fits together | [`docs/architecture.md`](../../docs/architecture.md) |

## How this app talks to the backend

- **Only call the functions listed in `docs/api-contract.md`**, with the exact names and inputs written there.
- **Never write to database tables directly.** The backend functions do the checking.
- Once it exists, use the ready-made wrappers in `packages/shared` instead of typing function names by hand.
- **Turn error codes into friendly sentences** in this app's own page text (in both languages). Never show a raw code like `TECHNICIAN_BUSY` to a person.
- Until a function is built, you may build against a fake version that returns the shapes from Section 3 of the contract. Keep fakes inside `apps/web/`.
- **Never put secret keys in code.** Keys go in a local `.env.local` file that is not shared. Only keys starting with `NEXT_PUBLIC_` reach the browser, and only the public "anon" key may ever start that way.

## Needs something outside this folder?

- A new or changed backend function, a database change, or a change in `packages/shared`: **ask Sakib.** Write a short, plain request saying what the page needs. Do not edit those folders yourself.
- A change to the plan documents or the root `CLAUDE.md`: suggest it in a pull request and mark it as needing Sakib's review.

## Working style for this folder

- Every file starts with a short comment saying what it is for, in plain words.
- Keep pages simple. Prefer small files that do one thing.
- Do not change the React version (`react` and `react-dom` are pinned to the same version as the mobile app on purpose, so the two apps do not fight). Ask Sakib if an upgrade is needed.
- Work on a branch with the right prefix (see the root rules). Never push to `main`.

## Status

The Next.js project exists and shows a simple "hello" page. It is connected to `@garmentpulse/shared`. No real pages yet. Start it with `npm run dev --workspace @garmentpulse/web` and open `http://localhost:3000` (see "Getting Started" in the root `CLAUDE.md`). Docker is not needed for this app.
