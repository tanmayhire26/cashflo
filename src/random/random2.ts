function generateRandomWord() {
    const letters = "abcdefghijklmnopqrstuvwxyz"; // Possible letters
    const minLength = 3; // Minimum word length
    const maxLength = 12; // Maximum word length
    const wordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength; // Random length between min and max
    let word = ""; // Initialize an empty string for the word

    for (let i = 0; i < wordLength; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length); // Get a random index
        word += letters[randomIndex]; // Append the random letter to the word
    }

    return word; // Return the generated word
}

// Test the function
console.log(generateRandomWord());
