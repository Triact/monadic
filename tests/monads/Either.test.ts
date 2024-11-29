import { isLeft, isRight, left, right } from "../../src/Either";

describe('either', () => {
   test('left', () => {
      const x = left('error');

      expect(isLeft(x)).toBe(true);
      expect(isRight(x)).toBe(false);
      expect(x.isLeft()).toBe(true);
      expect(x.isRight()).toBe(false);
   });

   test('right', () => {
      const x = right('success');

      expect(isLeft(x)).toBe(false);
      expect(isRight(x)).toBe(true);
      expect(x.isLeft()).toBe(false);
      expect(x.isRight()).toBe(true);
   });
});
