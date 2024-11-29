import { isNone, maybe, none, type Option } from './Option';

type Map = <A, B>(transform: (x: A) => B | undefined) => (x: Option<A>) => Option<B>;
export const map: Map = (transform) => (x) => (isNone(x) ? none : maybe(transform(x.value)));

type MapAll = <A, B>(transform: (x: A) => B) => (x: Option<A[]>) => Option<B[]>;
export const mapAll: MapAll = (transform) => (x) => (isNone(x) ? none : maybe(x.value.map((i) => transform(i))));

type MapAllAsync = <A, B>(transform: (x: A) => B) => (x: Option<A[]>) => Promise<Option<B[]>>;
export const mapAllAsync: MapAllAsync = (transform) => (x) => new Promise((resolve) => resolve(isNone(x) ? none : maybe(x.value.map((i) => transform(i)))));
