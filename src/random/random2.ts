// Function to generate a random word
const generateRandomWord = (minLength = 3, maxLength = 12) => {
    if (minLength < 1 || maxLength < minLength) {
        throw new Error("Invalid length parameters");
    }

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const wordLength = getRandomInt(minLength, maxLength);
    
    return Array.from({ length: wordLength }, () => letters[getRandomInt(0, letters.length - 1)]).join('');
};

// Helper function to get a random integer between min and max (inclusive)
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Example usage
try {
    console.log(generateRandomWord());
} catch (error) {
    console.error(error.message);
}
