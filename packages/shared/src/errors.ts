// packages/shared/src/errors.ts
//
// The list of error codes the backend can send (see Section 6 of
// docs/api-contract.md). When a backend call fails, error.message is one of
// these CAPITAL-LETTER codes. Apps turn each code into a friendly sentence in
// their own screens (Bangla and English). They never show the raw code to a person.
// Owned by Sakib.

export const ERROR_CODES = [
  'NOT_AUTHENTICATED',
  'WRONG_PLATFORM',
  'NOT_ALLOWED',
  'NOT_FOUND',
  'INVALID_INPUT',
  'TECHNICIAN_BUSY',
  'REPORT_ALREADY_ASSIGNED',
  'JOB_NOT_ACCEPTED',
  'JOB_ALREADY_ACCEPTED',
  'INVALID_STATUS_CHANGE',
] as const;

export type ErrorCode = (typeof ERROR_CODES)[number];

/** Used when a call fails with something that is not one of the known codes. */
export const UNKNOWN_ERROR = 'UNKNOWN' as const;

/** True when the text is one of the known error codes. */
export function isErrorCode(value: unknown): value is ErrorCode {
  return typeof value === 'string' && (ERROR_CODES as readonly string[]).includes(value);
}

/**
 * Reads the error code out of a failed backend call (the `error` object that
 * Supabase returns). Anything unrecognised becomes 'UNKNOWN' so the app can
 * show a general "something went wrong" sentence.
 */
export function getErrorCode(error: unknown): ErrorCode | typeof UNKNOWN_ERROR {
  const message =
    typeof error === 'object' && error !== null && 'message' in error
      ? (error as { message: unknown }).message
      : undefined;
  return isErrorCode(message) ? message : UNKNOWN_ERROR;
}
