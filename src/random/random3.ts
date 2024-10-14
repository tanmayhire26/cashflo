class RandomWordGenerator {
  private readonly letters = "abcdefghijklmnopqrstuvwxyz";

  generateRandomWord(minLength = 3, maxLength = 12): string {
    this.validateLength(minLength, maxLength);
    const wordLength = this.getRandomInt(minLength, maxLength);
    return Array.from({ length: wordLength }, () => this.letters[this.getRandomInt(0, this.letters.length - 1)]).join('');
  }

  private validateLength(minLength: number, maxLength: number): void {
    if (minLength < 1 || maxLength < minLength) {
      throw new Error("Invalid length parameters");
    }
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const generator = new RandomWordGenerator();

try {
  console.log(generator.generateRandomWord());
} catch (error) {
  console.error(error.message);
}