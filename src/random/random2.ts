class RandomWordGenerator {
    private readonly letters: string = "abcdefghijklmnopqrstuvwxyz";

    generate(minLength: number = 3, maxLength: number = 12): string {
        this.validateLengths(minLength, maxLength);
        const wordLength = this.getRandomInt(minLength, maxLength);
        return Array.from({ length: wordLength }, () => this.letters[this.getRandomInt(0, this.letters.length - 1)]).join('');
    }

    private validateLengths(minLength: number, maxLength: number): void {
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
    console.log(generator.generate());
} catch (error) {
    console.error(error.message);
}