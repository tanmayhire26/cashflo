const generateRandomWord = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const wordLength = Math.floor(Math.random() * 10) + 3;
  const word = Array(wordLength)
    .fill(0)
    .map(() => letters.charAt(Math.floor(Math.random() * letters.length)))
    .join('');
  return word;
};

console.log(generateRandomWord());