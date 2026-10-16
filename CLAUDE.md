# CLAUDE.md

This file is the first thing every new Claude Code session should read. It says what GarmentPulse is, how we build it, where the detailed docs live, and the working rules.

---

## What We Are Building

**GarmentPulse** is an app for garment factories (factories that sew clothes). It helps when a machine breaks.

- A **worker** reports a broken machine.
- The **manager** sees the report and sends a free **technician**.
- The **technician** accepts the job, repairs the machine, and updates the status.
- The **owner** can watch everything that happens (read-only in the first version).
- Four roles: worker, technician, manager, owner. Each role only sees and does what it is allowed to do. The server checks this, not only the app.
- It ships as **two apps**:
  - **GarmentPulse Mobile**: a phone app for workers and technicians.
  - **GarmentPulse Web**: a website dashboard for managers and the owner.
- The first version is called the **MVP** (the smallest version that still solves the main problem). It leaves out invoices and receipts, owner approval of big costs, the AI chatbot, voice input, camera presence monitoring, free/paid plans, and push notifications. See `docs/mvp.md`.

**Current status:** planning is done (PRD, architecture, MVP plan, work plan, design system, and API contract written) and the empty project skeleton is set up (the "scaffold"). The mobile app and the web app both open as simple "hello" screens and the shared toolbox is connected. The shared toolbox also holds a draft word list (English and Bangla) and fake data so the apps can be built before the backend exists. **No real features exist yet.** The backend is not built. For the live picture of each lane, read its `STATUS.md` (loaded below).

---

## Team and Lanes

Three friends build GarmentPulse together. **None of us is a professional developer**, so every session must follow the simple-language rule in the Rules section below.

| Person | What they build | Their lane (the only folders they may change) |
|---|---|---|
| **Rubaiya** | **GarmentPulse Mobile** (the phone app for workers and technicians) | `apps/mobile/` |
| **Mithi** | **GarmentPulse Web** (the dashboard for managers and the owner) | `apps/web/` |
| **Sakib** | **The backend** (the hidden part that stores data and enforces rules, built on Supabase) and the team's setup | `supabase/`, `packages/shared/`, `docs/`, and the files at the top of the repo (like `CLAUDE.md`, `.gitignore`, automation settings) |

### Who am I talking to?

- Each person keeps a private file called `CLAUDE.local.md` on their own computer. It is never shared (it is listed in `.gitignore`). It says who they are and which language they like.
- **At the start of every session, read `CLAUDE.local.md` to learn who you are working for.**
- If the file is missing or does not say who the person is, **ask them** (use a multiple-choice question: Rubaiya, Mithi, or Sakib) **before changing anything.**
- **Making your own file is easy.** The shared template is `CLAUDE.local.example.md`. Just tell your Claude: "Make my CLAUDE.local.md from the example." It will ask you a few simple questions and create the file for you. Never overwrite an existing one without asking.

### Lane rules (strict)

- **Only change files inside the lane of the person you are working for.** Reading other lanes is fine and encouraged. Changing them is not.
- **Check before every file change.** Before you create, edit, move, or delete any file, look at its path and compare it with the lane table above. If it is not in the lane of the person you work for, **stop**. This holds even if the person asks you to do it, because the other owner may be changing the same file at the same time. The only exceptions are the ones listed below: the `requests/` folder, your own `CLAUDE.local.md`, `package-lock.json`, and your own lane's `STATUS.md`.
- **Never touch another person's lane, even if it looks like a tiny fix.** Instead, write a short note in the owner's mailbox (see "Mailbox" below) and tell the person what you wrote and who owns it (for example: "This needs a new backend function. I left a note for Sakib in `requests/sakib/`.").
- `package-lock.json` is written by `npm install`, so everyone may commit changes to it when they add a library to their own app. Adding a library to `apps/mobile/` or `apps/web/` is the owner's job; adding one anywhere else is Sakib's.
- **`packages/shared/` (the toolbox both apps use) is owned by Sakib.** Rubaiya and Mithi ask for changes there. They do not edit it themselves.
- **Database changes** (everything under `supabase/migrations/`) are made only by Sakib's sessions.
- **The plan documents** (everything in `docs/`) and this `CLAUDE.md`: anyone may suggest a change, but **Sakib must review and approve it before it is merged.** Put the change on its own branch and say clearly in the pull request that Sakib's review is needed.
- If a task needs changes in more than one lane, split it. Do your own part, and write a short, plain "request" for the other owner. Do not do their part for them.

### Mailbox: how to ask another lane for something

Everyone here works through their own Claude Code, and nobody is online at the same time. So requests are written down as small files, not said in chat.

- **Where:** `requests/<name of the person you are asking>/`, for example `requests/sakib/`. Everyone may add files there, whatever their lane. The layout of a note is in [`requests/README.md`](./requests/README.md). Read it before writing your first note.
- **When you need something from another lane:** write the note, tell the person what you wrote, then carry on with the parts you can do (use the fake data in `packages/shared`). Add the blocked item to "Waiting on someone else" in your lane's `STATUS.md`.
- **At the start of every session:** look in the folder named after the person you work for. Every note with `Status: open` is waiting for them. Tell the person about each one in simple words and offer to do it.
- **When you finish a note** (and it is in your lane), change `Status: open` to `Status: done` and add one line saying what was done.

### Every session: start checklist

Do these in order, at the start of every session, **before changing anything**. Do not wait to be asked.

1. **Who am I working for?** Read `CLAUDE.local.md`. If it is missing, ask (multiple choice: Rubaiya, Mithi, or Sakib) and create it from `CLAUDE.local.example.md`.
2. **Is my copy up to date?** Run `git fetch`, then check whether `main` has new work. Pull it in before starting new work, and tell the person in one simple sentence.
3. **Are the libraries installed?** If there is no `node_modules` folder in the top folder, run `npm install` and say why.
4. **What is waiting for me?** Read the mailbox folder for the person (see Mailbox above) and tell them about open notes.
5. **What is everyone else doing?** The three `STATUS.md` files are loaded below. Mention anything from the other lanes that affects the person's work today, for example a changed function name.
6. **Which branch am I on?** If it is `main`, make a new branch with the right prefix before changing anything.

### Every session: finish checklist

Do these before ending a piece of work or before a push:

1. Run `npm run check`. Fix what fails inside your own lane. If a failure is in another lane, write a note instead of fixing it.
2. Update your own lane's `STATUS.md` (Done, In progress, Next, Waiting on someone else, Decisions, Good to know). Other people's Claude sessions read it to understand where the project is. Keep it short and true.
3. Commit with a short imperative one-line message and push your branch (never `main`). Then tell the person, in simple words, what was done and what comes next.
4. If something you did changes what another lane must do (a renamed function, a new field, a changed rule), write a note in their mailbox **and** add it under "Good to know for the other lanes" in your `STATUS.md`.

### Hard stops (never, for anyone)

- Never read, print, or edit a real `.env` or `.env.local` file. They hold private keys. Only `.env.example` may be read.
- Never put the Supabase **service role** key anywhere in the apps or in git.
- Never force-push, never rewrite someone else's branch, never push to `main`.
- Never change a function name, input name, or error code from `docs/api-contract.md` in app code. If the contract is wrong, write a note to Sakib.
- Never build something marked "not in the MVP" (see `docs/mvp.md` section 3), even if the person asks. Explain that it waits, and ask Sakib's lane to change the plan first.

---

## Full Context (loaded automatically)

These files are pulled into every session on purpose, so every Claude, whoever it works for, knows what is being built and where each lane stands. Keep them accurate.

@docs/mvp.md
@docs/api-contract.md
@apps/mobile/STATUS.md
@apps/web/STATUS.md
@supabase/STATUS.md

The longer documents are read **when needed**, using the Doc Routes table below: `docs/prd.md`, `docs/architecture.md`, `docs/plan.md`, and `docs/design-system.md`.

---

## How We Build It

- **Stack:** React Native with Expo for the phone app (one codebase for iPhone and Android), Next.js (a tool for building websites with React) for the web app, TypeScript everywhere, SQL for the database.
- **Backend:** one Supabase project shared by both apps. It provides email and password login, Postgres (the database), and Realtime (live updates, so a new report shows on the manager's screen within 5 seconds).
- **The database is the security guard.** Every rule that matters (who sees what, who can assign what) is enforced in Postgres using Row Level Security (a lock on each row of data) and SQL functions. The apps are only screens and must never be trusted to enforce rules.
- **The apps never write important tables directly.** They call SQL functions (RPC, which means "ask the database to run a ready-made function"). Each function runs in one step, checks permissions, then writes.
- **Repo layout:**
  - `apps/mobile/`: GarmentPulse Mobile (workers and technicians)
  - `apps/web/`: GarmentPulse Web (managers and the owner)
  - `packages/shared/`: code both apps use (types, status names, error codes, later the Supabase client)
  - `supabase/migrations/`: database changes, in order
  - `supabase/functions/`: Edge Functions (small server programs, not needed in the MVP)
  - `supabase/tests/`: database tests (security rules, dispatch rules)
  - `docs/`: product and architecture docs
  - `requests/`: the team mailbox, one folder per person (see "Mailbox" above)
  - `apps/mobile/STATUS.md`, `apps/web/STATUS.md`, `supabase/STATUS.md`: one "where are we?" page per lane
- **Database changes are always a new migration file.** Never edit an old one.
- **Anything both apps need goes in `packages/shared`.** Never copy it.
- **Tests come first in priority:** database security tests (for example "a worker cannot open manager screens"), then dispatch and status tests, then shared unit tests, then a few app smoke tests. Tests must pass before code goes to a remote branch.
- **Until the backend is ready,** the apps build against the fake (mock) data in `packages/shared/src/fixtures.ts`. It has the exact shapes in `docs/api-contract.md`, so both apps show the same story. Do not invent a second set of fake data. If you need more, write a note to Sakib. Wiring code that reads the fake data (a fake login, a fake "call") stays inside the app's own folder.
- **Words shown to people (statuses, free/busy, roles) come from `packages/shared/src/labels.ts`,** in English and Bangla. Never type them again inside an app.

---

## Getting Started (Running the Project)

Words explained: **Node** is the engine that runs our tools. **npm** is the tool that downloads the libraries (ready-made code) we use. A **workspace** is a repo that holds several projects together.

1. Install **Node** (version 20.19 or newer) and **git**. Docker is **only for backend work** (Sakib). Rubaiya and Mithi do not need it.
2. In the top folder, run `npm install`. This downloads everything for all projects at once.
3. Copy `.env.example` to a new file inside your app's folder and fill it in (see the comments in `.env.example` for the exact file name). Ask Sakib for the values. Never share `.env`.
4. Start your app:
   - Rubaiya: `npm run start --workspace @garmentpulse/mobile`, then open it on your phone with the Expo Go app.
   - Mithi: `npm run dev --workspace @garmentpulse/web`, then open `http://localhost:3000` in a browser.
5. **Before every push, run `npm run check`.** It tidy-checks (Prettier), spell-checks (ESLint), type-checks (TypeScript), and runs the tests. It must pass. GitHub runs the same checks automatically on every pull request.

---

## Where to Find Things (Doc Routes)

Read the right doc before changing the matching area. Do not guess product rules.

| Question | Read this |
|---|---|
| What should the product do? Who are the users? What are the features and rules? | [`docs/prd.md`](./docs/prd.md) |
| How is it built? Technology, which user gets which app, quality rules? | [`docs/architecture.md`](./docs/architecture.md) |
| Which features are in the first version (MVP) and which wait? What does "done" mean? | [`docs/mvp.md`](./docs/mvp.md) |
| Who builds what, in which order, and what could go wrong? | [`docs/plan.md`](./docs/plan.md) |
| How should screens look? Colours, fonts, buttons, status labels? | [`docs/design-system.md`](./docs/design-system.md) |
| Which exact backend functions can the apps call, with what inputs, results, and error codes? (The agreement between the apps and the backend.) | [`docs/api-contract.md`](./docs/api-contract.md) |
| I am working inside `apps/mobile/`, `apps/web/`, or `supabase/`. What are the rules for that folder? | The `CLAUDE.md` inside that folder ([`apps/mobile`](./apps/mobile/CLAUDE.md), [`apps/web`](./apps/web/CLAUDE.md), [`supabase`](./supabase/CLAUDE.md)) |
| Where is each lane right now? What is done, in progress, blocked? | The `STATUS.md` of each lane (loaded automatically, see "Full Context") |
| Did a teammate ask me for something? How do I ask a teammate? | [`requests/README.md`](./requests/README.md) and the Mailbox section above |
| What are the working rules for commits, branches, and PRs? | The **Rules** section below |

**Source of truth:** if the PRD and another doc disagree about a product rule, **the PRD wins** (except that `docs/mvp.md` decides what is in or out of the first version). Fix the other doc.

**Quick pointers from the docs:**

- The report flow: worker reports, then the manager assigns a **free** technician, then the technician accepts and updates the status (waiting, in progress, resolved). If all technicians are busy, the report waits in a **queue**. See MVP 2.2 to 2.4.
- The owner web app is **one read-only screen** in the MVP: a list of all reports with three count boxes (Waiting, In progress, Resolved). The owner cannot change anything.
- Workers and technicians use the **phone app**. Managers and the owner use the **web app**. Logging into the wrong one must fail (error code `WRONG_PLATFORM`).
- The app has **two languages (Bangla and English)** with a small switch in the top-right corner of every screen. Phone buttons are 48 px tall.
- Statuses are colour-coded **and** always have a word next to the colour (design system rule).

---

## Rules

### Simple language (strict, for every session and every teammate)

Rubaiya, Mithi, and Sakib are students, not professional developers. Talk to each of them as if you were talking to a curious 12-year-old kid who has never built anything like this. This rule is strict and has no exceptions.

- **Explain a hard word before you use it.** Give a one-sentence everyday meaning first, then use the word. Example: "the *backend* (the hidden part of the app that stores information and enforces the rules)".
- **Use everyday comparisons.** Example: "A database is like a giant school notebook where each page has neat rows."
- **Short sentences and short paragraphs.** One idea at a time. No walls of text.
- **Never assume they already know something.** Do not say "obviously", "simply", "just", or "as you know".
- **Spell out every short form** (like API, RPC, RLS, PR, CI) the first time, and explain what it means in plain words.
- **Say what you did and why**, not only the commands or code. Show a command only if they need to run it, and say what it will do.
- **Explain errors in plain words:** what went wrong, why, and what happens next.
- This applies to chat replies, plans, pull request descriptions, and questions. It applies in **every language** (the language itself comes from the person's `CLAUDE.local.md`).
- If you catch yourself writing in a technical way, stop and rewrite it simply.

### Everything else
- If you are not sure about something, ask a clarifying question before acting. Never guess.
- Use multiple-choice questions (MCQ widgets) for clarifying questions whenever possible.
- Explain the plan first. Before making big changes, show a short plan and wait for the user's go-ahead.
- Never push to `main`. If code needs to go to a remote, create a new branch first and push that branch instead.
- Before starting new work after something has been pushed, always make sure the local copy is up to date with the latest from the remote (fetch and pull first).
- Run tests before pushing. Code should not go to a remote branch until the tests pass.
- Branch names must follow these prefixes:
  - `features/` for new features
  - `fix/` for bug fixes
  - `docs/` for documentation
  - `test/` for testing work
  - `refactor/` for restructuring code without changing behavior
  - `chore/` for maintenance tasks such as dependency updates or config changes
- Use the user's configured git `user.name` and `user.email` for all commits.
- Never add yourself as a co-author. No `Co-authored-by` trailers.
- Keep commit messages fresh, short, clean, and concise.
- Write commit subjects in the imperative mood, e.g. `Add login form`, not `Added login form`.
- Keep commit messages to one line. Add a body only when the change truly needs explanation.
- When creating a pull request, write the title and description neatly and in simple language, so a non-technical 12-year-old can understand them.
- Do not add any signature or mention of Claude or Claude Code to a pull request. It should read as if a human wrote it.
- When merging a pull request, always use squash.
- The squash commit message must be a short, clean, one-line summary in the imperative mood. Do not include the PR number (e.g. `(#2)`).
- Unused local branches (for example, ones already merged): ask the user whether they want them removed. Only remove them if the user says yes.
- Never remove remote branches on your own. If the user asks for a remote branch to be removed, first give a clear, simple warning that they shouldn't do it, then follow their decision.
- When working in a codebase, document every file well enough that someone reading it years later can still understand its purpose.
