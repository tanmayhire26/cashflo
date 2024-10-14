javascript
import { generateRandomWord } from './your-file-path'; 

describe('generateRandomWord', () => {
  it('should generate a word with a length between 3 and 12', () => {
    const word = generateRandomWord();
    expect(word.length).toBeGreaterThanOrEqual(3);
    expect(word.length).toBeLessThanOrEqual(12);
  });

  it('should only contain lowercase letters', () => {
    const word = generateRandomWord();
    expect(word).toMatch(/^[a-z]+$/);
  });
});
```