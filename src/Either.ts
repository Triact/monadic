export type Either<L, R> = ILeft<L> | IRight<R>;

export interface IEither {
   isLeft: () => boolean;
   isRight: () => boolean;
}

export interface ILeft<L> extends IEither {
   _tag: 'Left';
   left: L;
}

export interface IRight<R> extends IEither {
   _tag: 'Right';
   right: R;
}

class Left<L> implements ILeft<L> {
   _tag: 'Left' = 'Left' as const;
   left: L;

   constructor(l: L) {
      this.left = l;
   }

   isLeft = () => true;
   isRight = () => false;
}

class Right<R> implements IRight<R> {
   _tag: 'Right' = 'Right' as const;
   right: R;

   constructor(r: R) {
      this.right = r;
   }

   isLeft = () => false;
   isRight = () => true;
}

export const left = <L, R = never>(l: L): Either<L, R> => new Left(l);
export const right = <R, L = never>(r: R): Either<L, R> => new Right(r);

export const isLeft = <L, R>(x: Either<L, R>): x is ILeft<L> => x._tag === 'Left';
export const isRight = <L, R>(x: Either<L, R>): x is IRight<R> => x._tag === 'Right';
