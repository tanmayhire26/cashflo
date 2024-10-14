import { generateRandomWord, getRandomInt } from './word-generator';

describe('generateRandomWord', () => {
  it('should throw an error for invalid length parameters', () => {
    expect(() => generateRandomWord(0, 5)).toThrowError('Invalid length parameters');
    expect(() => generateRandomWord(5, 4)).toThrowError('Invalid length parameters');
  });

  it('should generate a random word within the specified length range', () => {
    const word = generateRandomWord(5, 10);
    expect(word.length).toBeGreaterThanOrEqual(5);
    expect(word.length).toBeLessThanOrEqual(10);
  });

  it('should generate a word consisting only of lowercase letters', () => {
    const word = generateRandomWord();
    expect(word).toMatch(/^[a-z]+$/);
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
});