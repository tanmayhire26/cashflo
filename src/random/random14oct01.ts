function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({length}).map(() => characters[Math.floor(Math.random() * characters.length)]).join('');
}
const randomString = generateRandomString(10);
console.log(`Random String: ${randomString}`);