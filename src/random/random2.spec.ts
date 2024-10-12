import { gnrteRndmWrd } from './your-file-path';

describe('gnrteRndmWrd', () => {
  it('should generate a random word with a length between 3 and 12', () => {
    const word = gnrteRndmWrd();
    expect(word.length).toBeGreaterThanOrEqual(3);
    expect(word.length).toBeLessThanOrEqual(12);
  });

  it('should only contain lowercase letters', () => {
    const word = gnrteRndmWrd();
    expect(word).toMatch(/^[a-z]+$/);
  });
});