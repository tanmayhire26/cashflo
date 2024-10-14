const generateRandomWord = (minLength = 3, maxLength = 12) => {
  validateLength(minLength, maxLength);
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const wordLength = getRandomInt(minLength, maxLength);
  return Array.from({ length: wordLength }, () => letters[getRandomInt(0, letters.length - 1)]).join("");
};

const validateLength = (minLength, maxLength) => {
  if (minLength < 1 || maxLength < minLength) {
    throw new Error("Invalid length parameters");
  }
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(generateRandomWord());