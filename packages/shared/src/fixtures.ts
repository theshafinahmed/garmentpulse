// packages/shared/src/fixtures.ts
//
// FAKE DATA for building screens before the real backend exists. It has exactly
// the shapes in docs/api-contract.md section 3, so when the apps switch to the
// real backend (round 4) nothing needs renaming.
//
// Everyone uses THIS data, so the phone app and the website show the same story:
//   - Nila reported a needle problem. Tariq is on it (in progress, so he is busy).
//   - Sumon reported a motor noise. It is assigned to Hasan but not accepted yet.
//   - Rina's thread-tension report is in the queue (nobody assigned).
//   - An old press-machine report is resolved.
//   - Mou is the only free technician.
// Owned by Sakib.

import type { Machine, Profile, Report, Technician } from './types';
import { computeAvailability } from './helpers';

export const FAKE_MACHINES: Machine[] = [
  { id: 'm-01', name: 'Sewing machine 01' },
  { id: 'm-02', name: 'Sewing machine 02' },
  { id: 'm-14', name: 'Sewing machine 14' },
  { id: 'c-03', name: 'Cutting machine 03' },
  { id: 'p-01', name: 'Pressing machine 01' },
];

export const FAKE_PEOPLE: Profile[] = [
  { id: 'u-worker-1', display_name: 'Nila Akter', email: 'nila@example.com', role: 'worker' },
  { id: 'u-worker-2', display_name: 'Sumon Mia', email: 'sumon@example.com', role: 'worker' },
  { id: 'u-worker-3', display_name: 'Rina Begum', email: 'rina@example.com', role: 'worker' },
  { id: 'u-tech-1', display_name: 'Tariq Hasan', email: 'tariq@example.com', role: 'technician' },
  { id: 'u-tech-2', display_name: 'Hasan Ali', email: 'hasan@example.com', role: 'technician' },
  { id: 'u-tech-3', display_name: 'Mou Khatun', email: 'mou@example.com', role: 'technician' },
  { id: 'u-manager-1', display_name: 'Farhan Kabir', email: 'farhan@example.com', role: 'manager' },
  { id: 'u-owner-1', display_name: 'Mr. Rahman', email: 'owner@example.com', role: 'owner' },
];

const person = (id: string) => {
  const p = FAKE_PEOPLE.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown fake person: ${id}`);
  return { id: p.id, display_name: p.display_name };
};
const machine = (id: string) => {
  const m = FAKE_MACHINES.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown fake machine: ${id}`);
  return { id: m.id, name: m.name };
};

export const FAKE_REPORTS: Report[] = [
  {
    id: 'r-100',
    machine: machine('m-14'),
    description: 'The needle keeps breaking.',
    status: 'in_progress',
    reported_by: person('u-worker-1'),
    technician: person('u-tech-1'),
    accepted_at: '2026-10-16T08:20:00Z',
    created_at: '2026-10-16T08:05:00Z',
    updated_at: '2026-10-16T08:40:00Z',
  },
  {
    id: 'r-101',
    machine: machine('c-03'),
    description: 'Strange noise from the motor.',
    status: 'waiting',
    reported_by: person('u-worker-2'),
    technician: person('u-tech-2'),
    accepted_at: null,
    created_at: '2026-10-16T09:10:00Z',
    updated_at: '2026-10-16T09:15:00Z',
  },
  {
    id: 'r-102',
    machine: machine('m-02'),
    description: 'Thread tension is too tight.',
    status: 'waiting',
    reported_by: person('u-worker-3'),
    technician: null,
    accepted_at: null,
    created_at: '2026-10-16T09:30:00Z',
    updated_at: '2026-10-16T09:30:00Z',
  },
  {
    id: 'r-099',
    machine: machine('p-01'),
    description: 'The press does not heat up.',
    status: 'resolved',
    reported_by: person('u-worker-1'),
    technician: person('u-tech-1'),
    accepted_at: '2026-10-15T10:00:00Z',
    created_at: '2026-10-15T09:45:00Z',
    updated_at: '2026-10-15T12:30:00Z',
  },
];

/** The technicians as the manager sees them, with free/busy worked out from FAKE_REPORTS. */
export const FAKE_TECHNICIANS: Technician[] = FAKE_PEOPLE.filter(
  (p) => p.role === 'technician',
).map((p) => ({
  id: p.id,
  display_name: p.display_name,
  availability: computeAvailability(FAKE_REPORTS, p.id),
}));
