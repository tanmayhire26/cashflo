javascript
const { gnrteRndmWrd } = require('./your-file-path');

describe('gnrteRndmWrd', () => {
  it('should return a random word with a length between 3 and 12', () => {
    const word = gnrteRndmWrd();
    expect(word.length).toBeGreaterThanOrEqual(3);
    expect(word.length).toBeLessThanOrEqual(12);
  });

  it('should return a word containing only lowercase letters', () => {
    const word = gnrteRndmWrd();
    expect(word).toMatch(/^[a-z]+$/);
  });
});

```