import { generateRandomWord, getRandomInt } from './your-file';

describe('generateRandomWord', () => {
    it('should throw an error if minLength is less than 1', () => {
        expect(() => generateRandomWord(0, 5)).toThrowError("Invalid length parameters");
    });

    it('should throw an error if maxLength is less than minLength', () => {
        expect(() => generateRandomWord(5, 2)).toThrowError("Invalid length parameters");
    });

    it('should generate a word with length between minLength and maxLength', () => {
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
    it('should return a random integer between min and max (inclusive)', () => {
        const min = 5;
        const max = 10;
        const randomInt = getRandomInt(min, max);
        expect(randomInt).toBeGreaterThanOrEqual(min);
        expect(randomInt).toBeLessThanOrEqual(max);
    });

    it('should handle min equal to max', () => {
        const num = getRandomInt(5,5);
        expect(num).toBe(5);
    })
});