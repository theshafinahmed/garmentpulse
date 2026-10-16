// packages/shared/src/types.test.ts
//
// Checks that the role and status lists agree with the product rules
// (docs/prd.md section 3 and docs/mvp.md). Run with: npm test

import { describe, expect, it } from 'vitest';
import { PLATFORM_FOR_ROLE, REPORT_STATUSES, ROLES } from './types';

describe('roles and platforms', () => {
  it('gives every role exactly one platform', () => {
    expect(Object.keys(PLATFORM_FOR_ROLE).sort()).toEqual([...ROLES].sort());
  });

  it('puts workers and technicians on mobile, managers and the owner on web', () => {
    expect(PLATFORM_FOR_ROLE.worker).toBe('mobile');
    expect(PLATFORM_FOR_ROLE.technician).toBe('mobile');
    expect(PLATFORM_FOR_ROLE.manager).toBe('web');
    expect(PLATFORM_FOR_ROLE.owner).toBe('web');
  });
});

describe('report statuses', () => {
  it('has exactly the three MVP statuses', () => {
    expect([...REPORT_STATUSES]).toEqual(['waiting', 'in_progress', 'resolved']);
  });
});
