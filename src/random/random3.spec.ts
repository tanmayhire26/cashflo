import { generateRandomWordExpert, getRandomInt } from './random-word-generator';

describe('generateRandomWordExpert', () => {
  it('should throw an error if minLength is less than 1', () => {
    expect(() => generateRandomWordExpert(0, 12)).toThrowError('Invalid length parameters');
  });

  it('should throw an error if maxLength is less than minLength', () => {
    expect(() => generateRandomWordExpert(3, 2)).toThrowError('Invalid length parameters');
  });

  it('should generate a random word with a length between minLength and maxLength', () => {
    const word = generateRandomWordExpert(3, 8);
    expect(word.length).toBeGreaterThanOrEqual(3);
    expect(word.length).toBeLessThanOrEqual(8);
  });

  it('should generate a word consisting of lowercase letters', () => {
    const word = generateRandomWordExpert(3, 8);
    expect(word).toMatch(/^[a-z]+$/);
  });
});

describe('getRandomInt', () => {
  it('should return a random integer between min and max (inclusive)', () => {
    const min = 1;
    const max = 10;
    const randomInt = getRandomInt(min, max);
    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThanOrEqual(max);
  });
});