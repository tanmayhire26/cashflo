function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  Array.from({ length }).map(() => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  });
  
  return result;
}

// Usage example
const randomString = generateRandomString(10);
console.log(`Random String: ${randomString}`);