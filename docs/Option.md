# Option

## Construction

```TypeScript
const a = maybe('a');
const b = some('b');
const c = none;
```

## None check

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

## Get value

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

## Get value with fallback value when isNone is true

```TypeScript
const a = getOrElse('')(some('a')); // a === 'a'
const b = getOrElse('')(none); // b === '' (fallback value is returned);
```

## Get Property of object

Get a property of an object as another Option.

```TypeScript
const a = maybe({ b: 'b' });
const b = getProp(_ => _.b)(a); // result is Option<T>
if (!isNone(b)) {
    // this code is executed
    const value = b.value; // value === 'b'
}
```

## Get property value with fallback value when isNone is true

```TypeScript
const a = getPropOrElse('', _ => _.value)({ value: 'a' }); // a == 'a'
const b = getPropOrElse('', _ => _.value)(none); // b == '' (fallback value is returned)
const c = getPropOrElse('', _ => _.value)({ value: null }); // c == '' (fallback value is returned)
const d = getPropOrElse('', _ => _.value)({ value: undefined }); // d == '' (fallback value is returned)
```
