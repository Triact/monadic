import {
  Option,
  getOrElse,
  getProp,
  getPropOrElse,
  isNone,
  isNoneOrEmpty,
  maybe,
  none,
  some,
  value,
} from '../../src/monads/option';

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

  test('getProp(some, e => e.value) ==> some.value', () => {
    type A = { value: string };
    const a: A = {
      value: 'a',
    };
    const x = getProp<A, string>((e) => e.value)(some(a));
    expect(isNone(x)).toBe(false);

    if (!isNone(x)) {
      expect(x.value).toBe(a.value);
    }
  });

  test('getProp(e => e.value)(none) ==> none', () => {
    type A = { value: string };
    const a: Option<A> = none;
    const x = getProp<A, string>((e) => e.value)(a);
    expect(isNone(x)).toBe(true);
  });

  test('getPropOrElse(b)(some, e => e.value) ==> some.value', () => {
    type A = { value: string };
    const a: Option<A> = some({
      value: 'a',
    });
    const b = '';
    const x = getPropOrElse<A, string>(b, (e) => e.value)(a);
    expect(x).toBe('a');
  });

  test('getPropOrElse(else)(none, e => e.value) ==> else', () => {
    const a: Option<{ value: string }> = none;
    const b = '';
    const x = getPropOrElse<{ value: string }, string>(b, (e) => e.value)(a);
    expect(x).toBe(b);
  });

  test('getOrElse(else)(none) => else', () => {
    const a = none;
    const b = '';
    const x = getOrElse(b)(a);
    expect(x).toBe(b);
  });

  test('getOrElse(else)(some(a)) => a', () => {
    const a = some('a');
    const b = '';
    const x = getOrElse(b)(a);
    expect(x).toBe('a');
  });
});
