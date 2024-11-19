describe('gnrteRndmWrd', () => {
  it('should generate a word with length between 3 and 12', () => {
    const word = gnrteRndmWrd();
    expect(word.length).toBeGreaterThanOrEqual(3);
    expect(word.length).toBeLessThanOrEqual(12);
  });

  it('should generate a word containing only lowercase letters', () => {
    const word = gnrteRndmWrd();
    expect(word).toMatch(/^[a-z]+$/);
  });

  it('should generate different words on multiple calls', () => {
    const word1 = gnrteRndmWrd();
    const word2 = gnrteRndmWrd();
    expect(word1).not.toEqual(word2);
  });
});