import { assertSlotAvailable, isSlotAvailable, TimeRange } from '../lib/booking';

// Helper to create dates
const makeDate = (h: number, m: number = 0) =>
  new Date(2024, 0, 1, h, m, 0, 0);

describe('booking helpers', () => {
  const existing: TimeRange[] = [
    { start: makeDate(9), end: makeDate(10) },
    { start: makeDate(13), end: makeDate(14) },
  ];

  it('detects overlapping slots', () => {
    const ok = isSlotAvailable(existing, {
      start: makeDate(10),
      end: makeDate(11),
    });
    expect(ok).toBe(true);

    const bad = isSlotAvailable(existing, {
      start: makeDate(9, 30),
      end: makeDate(10, 30),
    });
    expect(bad).toBe(false);
  });

  it('throws on past booking', () => {
    const past = { start: new Date(2000, 0, 1), end: new Date(2000, 0, 1, 1) };
    expect(() => assertSlotAvailable(existing, past, new Date())).toThrow(
      /past/
    );
  });
});
