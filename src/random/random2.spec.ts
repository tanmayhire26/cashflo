javascript
import { generateRandomWord } from './your-file-path';

describe('generateRandomWord', () => {
  it('should return a string', () => {
    const word = generateRandomWord();
    expect(typeof word).toBe('string');
  });

  it('should return a word with a length between 3 and 12', () => {
    const word = generateRandomWord();
    expect(word.length).toBeGreaterThanOrEqual(3);
    expect(word.length).toBeLessThanOrEqual(12);
  });

  it('should return a word containing only lowercase letters', () => {
    const word = generateRandomWord();
    expect(word).toMatch(/^[a-z]+$/);
  });
});
```