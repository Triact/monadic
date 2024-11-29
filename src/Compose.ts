/** Sync */
export type Compose2 = <A, B, C>(a: (x: A) => B, b: (x: B) => C) => (x: A) => C;
export const compose2: Compose2 = (a, b) => (x) => b(a(x));

export type Compose3 = <A, B, C, D>(a: (x: A) => B, b: (x: B) => C, c: (x: C) => D) => (x: A) => D;
export const compose3: Compose3 = (a, b, c) => (x) => c(b(a(x)));

export type Compose4 = <A, B, C, D, E>(a: (x: A) => B, b: (x: B) => C, c: (x: C) => D, d: (x: D) => E) => (x: A) => E;
export const compose4: Compose4 = (a, b, c, d) => (x) => d(c(b(a(x))));

export type Compose5 = <A, B, C, D, E, F>(a: (x: A) => B, b: (x: B) => C, c: (x: C) => D, d: (x: D) => E, e: (x: E) => F) => (x: A) => F;
export const compose5: Compose5 = (a, b, c, d, e) => (x) => e(d(c(b(a(x)))));

/** Async  */
export type Compose2Async = <A, B, C>(a: (x: A) => Promise<B>, b: (x: B) => Promise<C>) => (x: A) => Promise<C>;
export const compose2Async: Compose2Async = (a, b) => async (x) => await b(await a(x));

export type Compose3Async = <A, B, C, D>(a: (x: A) => Promise<B>, b: (x: B) => Promise<C>, c: (x: C) => Promise<D>) => (x: A) => Promise<D>;
export const compose3Async: Compose3Async = (a, b, c) => async (x) => await c(await b(await a(x)));

export type Compose4Async = <A, B, C, D, E>(a: (x: A) => Promise<B>, b: (x: B) => Promise<C>, c: (x: C) => Promise<D>, D: (x: D) => Promise<E>) => (x: A) => Promise<E>;
export const compose4Async: Compose4Async = (a, b, c, d) => async (x) => await d(await c(await b(await a(x))));

export type Compose5Async = <A, B, C, D, E, F>(a: (x: A) => Promise<B>, b: (x: B) => Promise<C>, c: (x: C) => Promise<D>, D: (x: D) => Promise<E>, E: (x: E) => Promise<F>) => (x: A) => Promise<F>;
export const compose5Async: Compose5Async = (a, b, c, d, e) => async (x) => await e(await d(await c(await b(await a(x)))));
