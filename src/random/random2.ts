function generateRandomWord() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const minLength = 3;
  const maxLength = 12;
  const wordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  return Array(wordLength)
    .fill(0)
    .map(() => letters[Math.floor(Math.random() * letters.length)])
    .join("");
}