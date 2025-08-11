import { getCurrentDateTimeZone, convertDateToString } from '../../../src/shared/utils/date.util';
import { DateTime } from 'luxon';

describe('date.util', () => {
  describe('getCurrentDateTimeZone', () => {
    it('should return a JS Date in the correct timezone', () => {
      const date = getCurrentDateTimeZone();
      expect(date).toBeInstanceOf(Date);
      // Should be close to now
      expect(Math.abs(date.getTime() - Date.now())).toBeLessThan(2000);
    });
  });

  describe('convertDateToString', () => {
    it('should return empty string for null/undefined', () => {
      expect(convertDateToString(undefined as any)).toBe('');
      expect(convertDateToString(null as any)).toBe('');
    });

    it('should convert Date to string', () => {
      const date = new Date('2023-01-01T12:34:56Z');
      const str = convertDateToString(date);
      expect(typeof str).toBe('string');
      expect(str.length).toBeGreaterThan(0);
    });

    it('should convert ISO string to string', () => {
      const iso = '2023-01-01T12:34:56Z';
      const str = convertDateToString(iso);
      expect(typeof str).toBe('string');
      expect(str.length).toBeGreaterThan(0);
    });

    it('should return empty string for invalid date', () => {
      const str = convertDateToString('invalid-date');
      expect(str).toBe('');
    });
  });
});
