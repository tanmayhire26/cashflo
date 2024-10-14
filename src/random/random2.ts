javascript
const generateRandomWord = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const wordLength = Math.floor(Math.random() * 10) + 3;
  return Array(wordLength)
    .fill(0)
    .map(() => alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
    .join('');
};

console.log(generateRandomWord());
```