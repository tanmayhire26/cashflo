import { generateRandomString } from './your-file-name';

describe('generateRandomString', () => {
  it('should generate a string of the specified length', () => {
    const length = 10;
    const randomString = generateRandomString(length);
    expect(randomString.length).toBe(length);
  });

  it('should generate a string containing only alphanumeric characters', () => {
    const randomString = generateRandomString(10);
    expect(randomString).toMatch(/^[a-zA-Z0-9]+$/);
  });

  it('should generate different strings on multiple calls', () => {
    const string1 = generateRandomString(10);
    const string2 = generateRandomString(10);
    expect(string1).not.toBe(string2);
  });
});