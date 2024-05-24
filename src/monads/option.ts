export interface Some<A> {
  _tag: 'Some';
  value: A;
}

export interface None {
  _tag: 'None';
}

export type Option<A> = Some<A> | None;

export const some = <A>(x: A): Option<A> => ({ _tag: 'Some', value: x });
export const none: Option<never> = { _tag: 'None' };
export const maybe = <A>(x: A | undefined | null): Option<A> => (x === undefined || x === null ? none : some(x));

type IsNone = <A>(x: Option<A>) => x is None;
export const isNone: IsNone = <A>(x: Option<A>): x is None => x._tag === 'None';

export type Value = <A>(x: Option<A>) => A | undefined;
export const value: Value = <A>(x: Option<A>) => (isNone(x) ? undefined : x.value);

type IsNoneOrEmpty = (x: Option<string>) => boolean;
export const isNoneOrEmpty: IsNoneOrEmpty = (x: Option<string>): x is None => isNone(x) || x.value.length === 0;

/* Compose friendly functions */

type GetProp = <A, B>(cb: (a: A) => B) => (a: Option<A>) => Option<B>;
export const getProp: GetProp = (cb) => (a) => (isNone(a) ? none : maybe(cb(a.value)));

type GetOrElse = <A>(fallback: A) => (x: Option<A>) => A;
export const getOrElse: GetOrElse = (e) => (x) => (isNone(x) ? e : x.value);

type GetPropOrElse = <A, B>(e: B, cb: (x: A) => B | undefined) => (x: Option<A>) => B | undefined;
export const getPropOrElse: GetPropOrElse = (e, cb) => (x) => (isNone(x) ? e : getOrElse(e)(maybe(cb(x.value))));
