import { either } from '../../src/index';

describe('either', () => {
   test('left', () => {
      const x = either.left('error');

      expect(either.isLeft(x)).toBe(true);
      expect(either.isRight(x)).toBe(false);
      expect(x.isLeft()).toBe(true);
      expect(x.isRight()).toBe(false);
   });

   test('right', () => {
      const x = either.right('success');

      expect(either.isLeft(x)).toBe(false);
      expect(either.isRight(x)).toBe(true);
      expect(x.isLeft()).toBe(false);
      expect(x.isRight()).toBe(true);
   });
});
