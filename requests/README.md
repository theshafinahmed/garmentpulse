# requests/ (the team mailbox)

This folder is how teammates ask each other for things **without waiting for a chat reply**. Think of it as a mailbox with one box per person.

## Why it exists

Each person only changes their own lane (see `CLAUDE.md`). But sometimes your screen needs something from another lane, for example:

- Rubaiya needs a new field in `packages/shared` (Sakib's lane).
- Mithi needs a backend function changed (Sakib's lane).
- Sakib needs to tell Rubaiya and Mithi that a function name changed.

Instead of changing someone else's files, you leave a short note here. The other person's Claude reads its own box at the **start of every session** and tells them.

## Folders

| Folder | Notes TO this person |
|---|---|
| `requests/rubaiya/` | Notes for Rubaiya |
| `requests/mithi/` | Notes for Mithi |
| `requests/sakib/` | Notes for Sakib |

**Everyone may add files in this folder, whatever their lane.** Do not edit notes in someone else's box, except the owner of the box who marks a note `done`.

## How to write a note

Create a new file named `requests/<to>/<yyyy-mm-dd>-<short-name>.md`, for example `requests/sakib/2026-10-16-add-machine-location.md`. Use this exact layout, in simple language:

```markdown
# <One line: what you need>

- From: <rubaiya | mithi | sakib>
- To: <rubaiya | mithi | sakib>
- Status: open

## What I need
<One or two short sentences. Say exactly which function, file or field.>

## Why
<What screen or step is blocked or made worse without it.>

## What I am doing meanwhile
<How I carry on without waiting, for example "I use fake data".>
```

## When you finish a note

The person who owns the box changes `Status: open` to `Status: done` and adds one line at the bottom saying what was done (and in which branch or pull request). Do not delete notes: they are the team's memory.
