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

## valueOrElse
Gets the value of the Option or a fallback value when the Option is none.

```TypeScript
const a = valueOrElse('')(some('a')); // a === 'a'
const b = valueOrElse('')(none); // b === '' (fallback value is returned);
```

## prop

Get a property of a complex object and return the value as another Option.

```TypeScript
const a = maybe({ b: 'b' });
const b = prop(_ => _.b)(a); // result is Option<T>
if (!isNone(b)) {
    // this code is executed
    const value = b.value; // value === 'b'
}
```

## propOrElse

Get a the value of a property of an complex object or a fallback value when the value is none.

```TypeScript
const a = propOrElse('', _ => _.value)({ value: 'a' }); // a == 'a'
const b = propOrElse('', _ => _.value)(none); // b == '' (fallback value is returned)
const c = propOrElse('', _ => _.value)({ value: null }); // c == '' (fallback value is returned)
const d = propOrElse('', _ => _.value)({ value: undefined }); // d == '' (fallback value is returned)
```
