/**
 * Either a left or right value is set.
 * Useful when transforming "partial" functions into "total".
 * For example: by using Either<string, A> you can return a left("error message") in case of en error and right(a: A) in case of valid output.
 */
export type Either<E, A> = Left<E> | Right<A>;

export interface Left<E> {
    _tag: 'Left',
    left: E
}

export interface Right<A> {
    _tag: 'Right',
    right: A
}

export const left = <E, A=never>(e: E): Either<E, A> => ({
    _tag: 'Left',
    left: e
});

export const right = <A, E=never>(a: A): Either<E, A> => ({
    _tag: 'Right',
    right: a
});

export const isLeft = <E, A>(x: Either<E, A>) : x is Left<E> => x._tag === "Left";
export const isRight = <E, A>(x: Either<E, A>) : x is Right<A> => x._tag === "Right";
