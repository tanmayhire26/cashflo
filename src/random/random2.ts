function generateRandomWord(length = Math.floor(Math.random() * 10) + 3, characters = "abcdefghijklmnopqrstuvwxyz") {
  return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
}

console.log(generateRandomWord());