const generateRandomWord = (minLength = 3, maxLength = 12) => {
    if (minLength < 1 || maxLength < minLength) {
        throw new Error("Invalid length parameters");
    }

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const wordLength = getRandomInt(minLength, maxLength);
    let word = '';
    for (let i = 0; i < wordLength; i++) {
        word += letters[getRandomInt(0, letters.length - 1)];
    }
    return word;
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

try {
    console.log(generateRandomWord());
} catch (error) {
    console.error(error.message);
}