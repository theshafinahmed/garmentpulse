# CLAUDE.md for `supabase/` (the backend)

This file is read when a session works inside `supabase/`. It adds to the root [`CLAUDE.md`](../CLAUDE.md), it does not replace it. **The root rules (simple language, lanes, git rules) still apply here.**

## Whose folder is this?

- **Owner of this folder: Sakib.** Only Sakib's sessions change files here.
- If you are working for Rubaiya or Mithi, you may **read** this folder but must **not change** it. If their app needs something from the backend, they write a short, plain note in `requests/sakib/` (layout in `requests/README.md`).
- Not sure who you are working for? Read `CLAUDE.local.md` in the top folder, or ask.

## What this folder is

The **backend** is the hidden part of GarmentPulse that stores information and enforces the rules. It runs on Supabase (login, a Postgres database, and live updates). Both apps talk to it.

**Big idea: the database is the security guard.** The apps are only screens. Every rule that matters is enforced here, so a changed app cannot cheat. For example: a worker must not be able to do a manager's job, even by trying.

## Planned layout

| Folder | What goes in it |
|---|---|
| `migrations/` | Database changes, one new file per change, in order (tables, security rules, functions) |
| `functions/` | Edge Functions (small server programs). Not needed in the MVP; the chatbot and camera alerts will use them later |
| `tests/` | Database tests: role permissions ("a worker cannot open manager screens"), dispatch rules (busy technicians, the queue), status rules |

These folders are empty for now (they only hold a placeholder file).

## Read before you build

| Need | Read |
|---|---|
| Product rules (the PRD always wins) | [`docs/prd.md`](../docs/prd.md) and [`docs/mvp.md`](../docs/mvp.md) |
| Technology, who gets which app, quality rules | [`docs/architecture.md`](../docs/architecture.md) |
| The promise to the apps: function names, inputs, results, error codes | [`docs/api-contract.md`](../docs/api-contract.md) |

## Backend rules

- At the start of a session, follow the start checklist in the root `CLAUDE.md`, and read `requests/sakib/` for open notes from Rubaiya and Mithi. Before you finish, update [`STATUS.md`](./STATUS.md) in this folder.
- `packages/shared/` is also yours. Keep `src/types.ts`, `src/errors.ts` and `src/labels.ts` in step with `docs/api-contract.md`, and keep the fake data in `src/fixtures.ts` realistic.
- **Never edit an old migration.** Every change is a **new** migration file.
- **Row Level Security (a lock on each table row) is on for every table.** A new table without it is a bug.
- **Apps never write tables directly.** Important changes happen only through functions that check permissions and run in one step.
- **Every function must match `docs/api-contract.md` exactly:** same name, same inputs, same result shape, same error codes. Errors use the capital-letter code as the message.
- **Roles are checked on the server** (architecture NFR-02). Never trust a role sent by an app.
- **Never put the service-role key in an app or in git.** It is secret. The apps only get the public anon key.
- Provide **test data** (a small seed file) and a **Postman collection** early, so the apps can be checked against the real backend (plan 3.1).
- If a function in the contract must change, tell Rubaiya and Mithi **before** you change it.

## Running it locally

`supabase/config.toml` holds the local settings. To run the backend on your computer you need Docker and the Supabase command-line tool. Details will be added here when the first migration exists.

## Status

Only the settings file (`config.toml`) and empty folders exist. No tables, no functions, no tests yet.
