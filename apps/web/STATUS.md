# STATUS: GarmentPulse Web (`apps/web/`)

**Owner: Mithi.** Only Mithi's sessions change this file.

This is the "where are we?" page for the website. The root `CLAUDE.md` loads it into **every** teammate's Claude, so keep it short, true, and in simple words. **Update it before you finish each piece of work.**

**Last updated:** 2026-10-16 by the project setup

## Done

- The Next.js project exists and shows a "hello" page connected to `@garmentpulse/shared`.

## In progress

- Nothing yet.

## Next (in build order from `docs/mvp.md` section 4)

1. Login page (fake login first).
2. Manager: live list of all reports (use `FAKE_REPORTS` from `@garmentpulse/shared`).
3. Manager: technician free/busy list, assign button, queue view (use `FAKE_TECHNICIANS`, `isInQueue`).
4. Owner: one read-only screen with three count boxes (use `summarizeReports`).
5. Language switch (top-right) and colour status. Use `STATUS_LABELS` and friends from `@garmentpulse/shared`.

## Waiting on someone else

- Nothing yet. (If you are blocked, write a note in `requests/<owner>/` and list it here.)

## Decisions made in this lane

- None yet.

## Good to know for the other lanes

- Nothing yet.
