import { Replace, Nullable, Optional, persistenceType } from '../../src/shared/utils/types';

describe('Type Utilities', () => {
  describe('Replace', () => {
    it('should replace properties in T with those in R', () => {
      type T = { a: number; b: string; c: boolean };
      type R = { b: number };
      const value: Replace<T, R> = { a: 1, b: 2, c: true };
      expect(value).toEqual({ a: 1, b: 2, c: true });
    });
  });

  describe('Nullable', () => {
    it('should allow null and undefined', () => {
      const a: Nullable<number> = null;
      const b: Nullable<number> = undefined;
      const c: Nullable<number> = 5;
      expect(a).toBeNull();
      expect(b).toBeUndefined();
      expect(c).toBe(5);
    });
  });

  describe('Optional', () => {
    it('should make specified keys required and others optional', () => {
      type T = { a: number; b: string; c?: boolean };
      type O = Optional<T, 'a'>;
      const value: O = { a: 1 };
      expect(value.a).toBe(1);
    });
  });

  describe('persistenceType', () => {
    it('should allow only prisma or mongoose', () => {
      const a: persistenceType = 'prisma';
      const b: persistenceType = 'mongoose';
      expect(a).toBe('prisma');
      expect(b).toBe('mongoose');
    });
  });
});
