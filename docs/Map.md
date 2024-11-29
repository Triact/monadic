
# Map

This library provides utility functions for working with the `Option` monad, a functional programming construct that represents optional values. These utilities simplify transformations on optional values and collections, supporting both synchronous and asynchronous operations.

## `map`

Transforms the value inside an `Option` if it exists. If the `Option` is `none`, it remains unchanged.

```ts
import { map, maybe, none } from './Option';

const double = (x: number) => x * 2;
const optionalNumber = maybe(5);

const doubled = map(double)(optionalNumber);
console.log(doubled); // Output: Some(10)
```

## `mapAll`

Transforms all elements of an array inside an `Option`. If the `Option` is `none`, it remains unchanged.

```ts
import { mapAll, maybe } from './Option';

const toUpperCase = (x: string) => x.toUpperCase();
const optionalArray = maybe(['hello', 'world']);

const uppercasedArray = mapAll(toUpperCase)(optionalArray);
console.log(uppercasedArray); // Output: Some(['HELLO', 'WORLD'])
```

### `mapAllAsync`

Asynchronously transforms all elements of an array inside an `Option`. If the `Option` is `none`, it remains unchanged.

```ts
import { mapAllAsync, maybe } from './Option';

const toUpperCase = (x: string) => x.toUpperCase();
const optionalArray = maybe(['hello', 'world']);

mapAllAsync(toUpperCase)(optionalArray).then(console.log);
// Output: Some(['HELLO', 'WORLD'])
```

---

## API Reference

### Utilities

| Function      | Description                                                          |
|---------------|----------------------------------------------------------------------|
| `map`         | Transform the value inside an `Option`.                              |
| `mapAll`      | Transform all elements in an array inside an `Option`.               |
| `mapAllAsync` | Asynchronously transform all elements in an array inside an `Option`. |

---

## License

This library is licensed under the MIT License.
