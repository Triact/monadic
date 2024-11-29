
# Compose

This library provides utility functions for composing synchronous and asynchronous functions with up to five levels of composition. These utilities simplify the process of chaining function calls and are especially useful when working with functional programming patterns.

## Synchronous Composition

The synchronous composition utilities (`compose2`, `compose3`, etc.) allow you to chain functions that operate synchronously. Each function is executed in sequence, with the output of one passed as the input to the next.

### `compose2`

Compose two functions into a single function.

``` TypeScript
const double = (x: number) =&gt; x * 2;
const square = (x: number) =&gt; x ** 2;

const doubleThenSquare = compose2(double, square);
console.log(doubleThenSquare(3)); // Output: 36
```

### `compose3`

Compose three functions into a single function.

``` TypeScript
const add = (x: number) =&gt; x + 1;
const double = (x: number) =&gt; x * 2;
const square = (x: number) =&gt; x ** 2;

const addDoubleSquare = compose3(add, double, square);
console.log(addDoubleSquare(2)); // Output: 36
```

## Asynchronous Composition

The asynchronous composition utilities (`compose2Async`, `compose3Async`, etc.) allow you to chain asynchronous functions that return Promises. These functions ensure that each operation is awaited in sequence.

### `compose2Async`

Compose two asynchronous functions into a single function.

``` TypeScript
const fetchUser = async (id: number) =&gt; ({ id, name: 'User' + id });
const fetchPosts = async (user: { id: number }) =&gt; [`Post1 of ${user.name}`, `Post2 of ${user.name}`];

const fetchUserAndPosts = compose2Async(fetchUser, fetchPosts);
fetchUserAndPosts(1).then(console.log);
// Output: ['Post1 of User1', 'Post2 of User1']
```

---

## API Reference

### Sync Utilities

| Function         | Description                       |
|------------------|-----------------------------------|
| `compose2`       | Compose 2 synchronous functions. |
| `compose3`       | Compose 3 synchronous functions. |
| `compose4`       | Compose 4 synchronous functions. |
| `compose5`       | Compose 5 synchronous functions. |

### Async Utilities

| Function            | Description                       |
|---------------------|-----------------------------------|
| `compose2Async`     | Compose 2 asynchronous functions. |
| `compose3Async`     | Compose 3 asynchronous functions. |
| `compose4Async`     | Compose 4 asynchronous functions. |
| `compose5Async`     | Compose 5 asynchronous functions. |
