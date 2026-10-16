// packages/shared/src/labels.ts
//
// The WORD LIST (plan step ★3): the exact words both apps show for statuses,
// availability and roles, in English and Bangla. Keeping them in one place
// means the phone app and the website always say the same thing.
//
// DRAFT: the Bangla words below are a first suggestion. The team must read
// them together and fix any word that sounds wrong to a factory worker.
// After that, change the words HERE only. Never copy them into an app.
// Owned by Sakib.

import type { ReportStatus, Role, TechnicianAvailability } from './types';

export type Language = 'en' | 'bn';

export const LANGUAGES: readonly Language[] = ['en', 'bn'];

type Words = Record<Language, string>;

export const STATUS_LABELS: Record<ReportStatus, Words> = {
  waiting: { en: 'Waiting', bn: 'অপেক্ষমাণ' },
  in_progress: { en: 'In progress', bn: 'চলমান' },
  resolved: { en: 'Resolved', bn: 'সমাধান হয়েছে' },
};

export const AVAILABILITY_LABELS: Record<TechnicianAvailability, Words> = {
  free: { en: 'Free', bn: 'খালি' },
  busy: { en: 'Busy', bn: 'ব্যস্ত' },
};

export const ROLE_LABELS: Record<Role, Words> = {
  worker: { en: 'Worker', bn: 'শ্রমিক' },
  technician: { en: 'Technician', bn: 'টেকনিশিয়ান' },
  manager: { en: 'Manager', bn: 'ম্যানেজার' },
  owner: { en: 'Owner', bn: 'মালিক' },
};
