# STATUS: Backend, shared toolbox and docs (`supabase/`, `packages/shared/`, `docs/`)

**Owner: Sakib.** Only Sakib's sessions change this file.

This is the "where are we?" page for the backend and the shared toolbox. The root `CLAUDE.md` loads it into **every** teammate's Claude, so keep it short, true, and in simple words. **Update it before you finish each piece of work.**

**Last updated:** 2026-10-16 by the project setup

## Done

- Project scaffold, checks (`npm run check`) and the GitHub robot (CI).
- `docs/api-contract.md` draft v1 (still to be reviewed by all three; see its section 8).
- `packages/shared` has: data shapes, error codes, a **draft** English/Bangla word list (`labels.ts`), helper rules (`helpers.ts`), and fake data (`fixtures.ts`).

## In progress

- Nothing yet.

## Next (in build order from `docs/mvp.md` section 4)

1. Review the API contract with Rubaiya and Mithi and answer its open questions (how accounts and roles are created, where machines come from, reassigning).
2. Agree the Bangla words in `packages/shared/src/labels.ts` with the team.
3. Create the Supabase project and give Rubaiya and Mithi the two public values for their `.env` files.
4. Round 1: login and roles, role checks on the server, tables for machines and reports, test data.

## Waiting on someone else

- The team's review of the API contract and the Bangla words.

## Decisions made in this lane

- None final yet. The proposed ones are listed in `docs/api-contract.md` section 8.

## Good to know for the other lanes

- Fake data for screens lives in `packages/shared/src/fixtures.ts`. Use it instead of inventing your own.
