javascript
const gnrteRndmWrd = () => {
    // Define the alphabet for generating the random word
    let letters = "abcdefghijklmnopqrstuvwxyz"; 
    // Generate a random word length between 3 and 12
    let wrdLth = Math.floor(Math.random() * 10) + 3; 
    // Initialize an empty string to store the generated word
    let wrd = ""; 
    
    // Create an array of the specified length, filled with 0s
    // Map each element of the array to a random character from the alphabet
    // Join the characters into a single string
    wrd = Array(wrdLth).fill(0).map(() => letters.charAt(Math.floor(Math.random() * letters.length))).join('');

    // Return the generated word
    return wrd; 
}

console.log(gnrteRndmWrd()); 
```