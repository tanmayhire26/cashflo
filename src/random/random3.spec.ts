import { generateRandomWordExpert, getRandomInt } from './word-generator';

describe('generateRandomWordExpert', () => {
  it('should throw an error if minLength is less than 1', () => {
    expect(() => generateRandomWordExpert(0, 12)).toThrowError('Invalid length parameters');
  });

  it('should throw an error if maxLength is less than minLength', () => {
    expect(() => generateRandomWordExpert(5, 4)).toThrowError('Invalid length parameters');
  });

  it('should generate a random word with the specified length', () => {
    const word = generateRandomWordExpert(5, 10);
    expect(word.length).toBeGreaterThanOrEqual(5);
    expect(word.length).toBeLessThanOrEqual(10);
  });

  it('should generate a word with lowercase letters only', () => {
    const word = generateRandomWordExpert(5, 10);
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