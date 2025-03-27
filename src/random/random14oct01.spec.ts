import { generateRandomString } from './your-file';

describe('generateRandomString', () => {
  it('should generate a string of the specified length', () => {
    const length = 10;
    const randomString = generateRandomString(length);
    expect(randomString.length).toBe(length);
  });

  it('should generate a string containing only alphanumeric characters', () => {
    const length = 10;
    const randomString = generateRandomString(length);
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
    expect(alphanumericRegex.test(randomString)).toBe(true);
  });

  it('should generate different strings on multiple calls', () => {
    const length = 10;
    const randomString1 = generateRandomString(length);
    const randomString2 = generateRandomString(length);
    expect(randomString1).not.toBe(randomString2);
  });

  it('should handle length 0', () => {
    const randomString = generateRandomString(0);
    expect(randomString).toBe('');
  });

  it('should handle large length', () => {
    const length = 100;
    const randomString = generateRandomString(length);
    expect(randomString.length).toBe(length);
  });

  it('should throw error for negative length', () => {
    expect(() => generateRandomString(-1)).toThrowError();
  });

});