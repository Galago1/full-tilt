import { format, parseISO } from 'date-fns';
import { formatIso, formatDateIso, getFirstDayOfNextMonth } from '../date';

describe('dateUtils', () => {
  describe('formatIso', () => {
    it('returns an empty string if no date is provided', () => {
      expect(formatIso()).toBe('');
    });

    it('returns the formatted date for a valid ISO date string', () => {
      const date = '2021-09-21T00:00:00.000Z';
      const formattedDate = format(parseISO(date), 'MM/dd/yyyy');
      expect(formatIso(date)).toBe(formattedDate);
    });
  });

  describe('formatDateIso', () => {
    it('returns an empty string if no date is provided', () => {
      expect(formatDateIso()).toBe('');
    });

    it('returns the formatted date for a valid Date object', () => {
      const date = new Date('2021-09-21T00:00:00.000Z');
      const formattedDate = format(date, 'MM/dd/yyyy');
      expect(formatDateIso(date)).toBe(formattedDate);
    });
  });

  describe('getFirstDayOfNextMonth', () => {
    it('returns the first day of the next month', () => {
      const firstDayOfNextMonth = getFirstDayOfNextMonth();
      const expectedDate = new Date();
      expectedDate.setMonth(expectedDate.getMonth() + 1);
      expectedDate.setDate(1);
      expectedDate.setHours(0, 0, 0, 0);

      expect(firstDayOfNextMonth).toEqual(expectedDate);
    });
  });
});
