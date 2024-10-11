const letters = 'abcdefghijklmnopqrstuvwxyz';

const generateRandomWord = (minLength = 3, maxLength = 12) => {
  const wordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let word = '';
  for (let i = 0; i < wordLength; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    word += letters[randomIndex];
  }
  return word;
};

console.log(generateRandomWord());