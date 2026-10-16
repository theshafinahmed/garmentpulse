// packages/shared/src/types.ts
//
// The "shapes" of the information the backend sends to the apps.
// These copy Section 3 of docs/api-contract.md exactly. If this file and the
// contract disagree, the contract wins: fix this file. Owned by Sakib.

/** The four kinds of people who use GarmentPulse. */
export type Role = 'worker' | 'technician' | 'manager' | 'owner';

/** Which app a person uses: workers and technicians use the phone app, the rest use the web app. */
export type Platform = 'mobile' | 'web';

/** The three report statuses (same words for everyone). */
export type ReportStatus = 'waiting' | 'in_progress' | 'resolved';

/** Whether a technician can take a new job right now. */
export type TechnicianAvailability = 'free' | 'busy';

export const ROLES: readonly Role[] = ['worker', 'technician', 'manager', 'owner'];
export const REPORT_STATUSES: readonly ReportStatus[] = ['waiting', 'in_progress', 'resolved'];

/** Which app each role belongs to (PRD section 3, architecture section 3). */
export const PLATFORM_FOR_ROLE: Record<Role, Platform> = {
  worker: 'mobile',
  technician: 'mobile',
  manager: 'web',
  owner: 'web',
};

export type Profile = { id: string; display_name: string; email: string; role: Role };

export type Machine = {
  id: string;
  /** A short name people recognise, for example "Sewing machine 14". */
  name: string;
};

export type Report = {
  id: string;
  machine: { id: string; name: string };
  /** The worker's typed description of the problem. */
  description: string;
  status: ReportStatus;
  reported_by: { id: string; display_name: string };
  /** null means nobody is assigned yet. */
  technician: { id: string; display_name: string } | null;
  /** Set when the technician accepts the job. null until then. */
  accepted_at: string | null;
  created_at: string;
  updated_at: string;
};

export type Technician = {
  id: string;
  display_name: string;
  availability: TechnicianAvailability;
};

/** The three count boxes on the owner's screen. */
export type OwnerSummary = Record<ReportStatus, number>;
