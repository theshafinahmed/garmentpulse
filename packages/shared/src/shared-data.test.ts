// packages/shared/src/shared-data.test.ts
//
// Checks the word list, the helper rules, and the fake data. They protect the
// promise that both apps tell the same story. Run with: npm test

import { describe, expect, it } from 'vitest';
import { FAKE_REPORTS, FAKE_TECHNICIANS } from './fixtures';
import { computeAvailability, isInQueue, summarizeReports } from './helpers';
import { AVAILABILITY_LABELS, LANGUAGES, ROLE_LABELS, STATUS_LABELS } from './labels';
import { REPORT_STATUSES, ROLES } from './types';

describe('word list', () => {
  it('has every status, role and availability in both languages', () => {
    for (const status of REPORT_STATUSES) {
      for (const lang of LANGUAGES) expect(STATUS_LABELS[status][lang]).not.toBe('');
    }
    for (const role of ROLES) {
      for (const lang of LANGUAGES) expect(ROLE_LABELS[role][lang]).not.toBe('');
    }
    for (const a of ['free', 'busy'] as const) {
      for (const lang of LANGUAGES) expect(AVAILABILITY_LABELS[a][lang]).not.toBe('');
    }
  });
});

describe('helper rules', () => {
  it('finds exactly the queued report in the fake data', () => {
    expect(FAKE_REPORTS.filter(isInQueue).map((r) => r.id)).toEqual(['r-102']);
  });

  it('counts reports for the owner boxes', () => {
    expect(summarizeReports(FAKE_REPORTS)).toEqual({ waiting: 2, in_progress: 1, resolved: 1 });
  });

  it('treats a technician with only resolved jobs as free', () => {
    const resolvedOnly = FAKE_REPORTS.filter((r) => r.status === 'resolved');
    expect(computeAvailability(resolvedOnly, 'u-tech-1')).toBe('free');
  });
});

describe('fake data', () => {
  it('has one free technician and two busy ones', () => {
    const free = FAKE_TECHNICIANS.filter((t) => t.availability === 'free').map((t) => t.id);
    expect(free).toEqual(['u-tech-3']);
    expect(FAKE_TECHNICIANS.filter((t) => t.availability === 'busy')).toHaveLength(2);
  });

  it('has a job only on accepted reports that are in progress or resolved', () => {
    for (const r of FAKE_REPORTS) {
      if (r.status !== 'waiting') expect(r.accepted_at).not.toBeNull();
    }
  });
});
