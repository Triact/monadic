import {
   Option,
   getOrElse,
   prop,
   getPropOrElse,
   isNone,
   isNoneOrEmpty,
   maybe,
   none,
   some,
   value,
} from '../../src/Option';

describe('option', () => {
   test('some', () => {
      const a = 'a';
      const x = some(a);
      expect(isNone(x)).toBe(false);

      if (!isNone(x)) {
         expect(x.value).toBe(a);
      }
   });

   test('none', () => {
      const x = none;
      expect(isNone(x)).toBe(true);
   });

   test('maybe(a)', () => {
      const a = 'a';
      const x = maybe(a);
      expect(isNone(x)).toBe(false);
      if (!isNone(x)) {
         expect(x.value).toBe(a);
      }
   });

   test('maybe(null)', () => {
      const a = null;
      const x = maybe(a);
      expect(isNone(x)).toBe(true);
   });

   test('maybe(undefined)', () => {
      const a = undefined;
      const x = maybe(a);
      expect(isNone(x)).toBe(true);
   });

   test('value(some) ==> some.value', () => {
      const a = 'a';
      const x = some(a);
      expect(value(x)).toBe(a);
   });

   test('value(none) ==> undefined', () => {
      const x = none;
      expect(value(x)).toBe(undefined);
   });

   test('isNullOrEmpty(some) ==> false', () => {
      const a = 'a';
      const x = some(a);
      expect(isNoneOrEmpty(x)).toBe(false);
   });

   test('isNullOrEmpty(none) ==> true', () => {
      const x = none;
      expect(isNoneOrEmpty(x)).toBe(true);
   });

   test('prop(some, e => e.value) ==> some.value', () => {
      interface A {
         value: string;
      }
      const a: A = {
         value: 'a',
      };
      const x = prop<A, string>((e) => e.value)(some(a));
      expect(isNone(x)).toBe(false);

      if (!isNone(x)) {
         expect(x.value).toBe(a.value);
      }
   });

   test('prop(e => e.value)(none) ==> none', () => {
      interface A {
         value: string;
      }
      const a: Option<A> = none;
      const x = prop<A, string>((e) => e.value)(a);
      expect(isNone(x)).toBe(true);
   });

   test('propValueOrElse(b)(some, e => e.value) ==> some.value', () => {
      interface A {
         value: string;
      }
      const a: Option<A> = some({
         value: 'a',
      });
      const b = '';
      const x = getPropOrElse<A, string>(b, (e) => e.value)(a);
      expect(x).toBe('a');
   });

   test('propValueOrElse(else)(none, e => e.value) ==> else', () => {
      const a: Option<{ value: string }> = none;
      const b = '';
      const x = getPropOrElse<{ value: string }, string>(b, (e) => e.value)(a);
      expect(x).toBe(b);
   });

   test('propValueOrElse(else)({ value: null }, e => e.value) ==> else', () => {
      interface A {
         value: string | null;
      }
      const a: Option<A> = some({ value: null });
      const b = '';
      const x = getPropOrElse<A, string | null>(b, (e) => e.value)(a);
      expect(x).toBe(b);
   });

   test('propValueOrElse(else)({ value: undefined }, e => e.value) ==> else', () => {
      interface A {
         value: string | undefined;
      }
      const a: Option<A> = some({ value: undefined });
      const b = '';
      const x = getPropOrElse<A, string | undefined>(b, (e) => e.value)(a);
      expect(x).toBe(b);
   });

   test('valueOrElse(else)(none) => else', () => {
      const a = none;
      const b = '';
      const x = getOrElse(b)(a);
      expect(x).toBe(b);
   });

   test('valueOrElse(else)(some(a)) => a', () => {
      const a = some('a');
      const b = '';
      const x = getOrElse(b)(a);
      expect(x).toBe('a');
   });
});
