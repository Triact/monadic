# Option

## Construction

```TypeScript
const a = maybe('a');
const b = some('b');
const c = none;
```

## isNone

Checks whether the value of the Option is none. If so, true is returned. Otherwise, false.

```TypeScript
const a = maybe(null);
if (!isNone(a)) {
    // this code is not executed
    const value = a.value;
}

const b = maybe('b');
if (!isNone(b)) {
    // this code is executed
    const value = b.value; // value === 'b'
}
```

## value

Accessing the value of the Option.

```TypeScript
const a = maybe('a');
if (!isNone(a)) {
    // a.value is only accessible after isNone(a) is performed;
    const value = a.value; // value === 'a'
}
// a.value is not accessible from here.

const b = value(some('b')); // b == 'b'
const c = value(none); // c == undefined
```

## getOrElse
Gets the value of the Option or a fallback value when the Option is none.

```TypeScript
const a = getOrElse('')(some('a')); // a === 'a'
const b = getOrElse('')(none); // b === '' (fallback value is returned);
```

## getProp

Get a property of a complex object and return the value as another Option.

```TypeScript
const a = maybe({ b: 'b' });
const b = getProp(_ => _.b)(a); // result is Option<T>
if (!isNone(b)) {
    // this code is executed
    const value = b.value; // value === 'b'
}
```

## getPropOrElse

Get a the value of a property of an complex object or a fallback value when the value is none.

```TypeScript
const a = getPropOrElse('', _ => _.value)({ value: 'a' }); // a == 'a'
const b = getPropOrElse('', _ => _.value)(none); // b == '' (fallback value is returned)
const c = getPropOrElse('', _ => _.value)({ value: null }); // c == '' (fallback value is returned)
const d = getPropOrElse('', _ => _.value)({ value: undefined }); // d == '' (fallback value is returned)
```
