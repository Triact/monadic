import { isNone, type Option } from './Option';

type Equals = <T>(a: Option<T>, b: Option<T>) => boolean;
export const equals: Equals = (a, b) => !isNone(a) && !isNone(b) && a.value === b.value;

type EqualsCaseInsensitive = (a: Option<string>, b: Option<string>) => boolean;
export const equalsCaseInsensitive: EqualsCaseInsensitive = (a, b) => !isNone(a) && !isNone(b) && a.value.toLowerCase() === b.value.toLowerCase();
