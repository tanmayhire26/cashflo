const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomWord = (minLength = 3, maxLength = 12) => {
    if (minLength < 1 || maxLength < minLength) throw new Error("Invalid length parameters");
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const wordLength = getRandomInt(minLength, maxLength);
    return Array.from({ length: wordLength }, () => letters[getRandomInt(0, letters.length - 1)]).join('');
};

console.log(generateRandomWord());