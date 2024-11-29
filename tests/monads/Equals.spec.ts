import { equals } from '../../src/Equals';
import { none, some } from '../../src/Option';

describe('monads.abstractions.equals', () => {
    test('Equal: none', () => {
        const a = none;
        const b = none;
        const x = equals(a, b);
        expect(x).toBe(false);
    });

    test('Unequal: a none', () => {
        const a = none;
        const b = some(1);
        const x = equals(a, b);
        expect(x).toBe(false);
    });

    test('Unequal: b none', () => {
        const a = some(1);
        const b = none;
        const x = equals(a, b);
        expect(x).toBe(false);
    });

    test('Unequal: int', () => {
        const a = some(1);
        const b = some(1);
        const x = equals(a, b);
        expect(x).toBe(true);
    });

    test('Unequal: int', () => {
        const a = some(1);
        const b = some(2);
        const x = equals(a, b);
        expect(x).toBe(false);
    });

    test('Equal: string', () => {
        const a = some('a');
        const b = some('a');
        const x = equals(a, b);
        expect(x).toBe(true);
    });

    test('Unequal: string', () => {
        const a = some('a');
        const b = some('b');
        const x = equals(a, b);
        expect(x).toBe(false);
    });

    test('Unequal: string different casing', () => {
        const a = some('a');
        const b = some('A');
        const x = equals(a, b);
        expect(x).toBe(false);
    });
});
