import { generateRandomWord, getRandomInt } from './your-file-name';

describe('generateRandomWord', () => {
    it('should throw an error if minLength is less than 1', () => {
        expect(() => generateRandomWord(0, 5)).toThrowError("Invalid length parameters");
    });

    it('should throw an error if maxLength is less than minLength', () => {
        expect(() => generateRandomWord(5, 2)).toThrowError("Invalid length parameters");
    });

    it('should generate a word within the specified length range', () => {
        const word = generateRandomWord(3, 5);
        expect(word.length).toBeGreaterThanOrEqual(3);
        expect(word.length).toBeLessThanOrEqual(5);
    });

    it('should generate a word containing only lowercase letters', () => {
        const word = generateRandomWord();
        expect(word).toMatch(/^[a-z]+$/);
    });


    it('should generate different words on multiple calls', () => {
        const word1 = generateRandomWord();
        const word2 = generateRandomWord();
        expect(word1).not.toEqual(word2);
    });
});

describe('getRandomInt', () => {
    it('should return a random integer within the specified range (inclusive)', () => {
        const min = 5;
        const max = 10;
        const randomInt = getRandomInt(min, max);
        expect(randomInt).toBeGreaterThanOrEqual(min);
        expect(randomInt).toBeLessThanOrEqual(max);
    });

    it('should return the same number if min and max are equal', () => {
      const num = 5;
      expect(getRandomInt(num, num)).toBe(num);
    });
});