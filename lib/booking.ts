// Utility helpers for validating appointment bookings.
// These functions are pure and can be unit tested without a database.

export interface TimeRange {
  start: Date;
  end: Date;
}

// Returns true when the time range does not overlap any existing appointments
// and the start is not in the past.
export function isSlotAvailable(
  existing: TimeRange[],
  range: TimeRange,
  now: Date = new Date()
): boolean {
  if (range.start < now) return false;
  return existing.every(
    (slot) => range.end <= slot.start || range.start >= slot.end
  );
}

// Convenience helper that throws descriptive errors used by APIs.
export function assertSlotAvailable(
  existing: TimeRange[],
  range: TimeRange,
  now: Date = new Date()
) {
  if (range.start < now) {
    throw new Error('Cannot book an appointment in the past');
  }
  const overlaps = existing.some(
    (slot) => !(range.end <= slot.start || range.start >= slot.end)
  );
  if (overlaps) {
    throw new Error('Selected time overlaps an existing appointment');
  }
}
