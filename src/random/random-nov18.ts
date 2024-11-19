function removeDuplicates<T>(array: T[], key: keyof T): T[] {
    const uniqueObjects = new Map<any, T>();
    for (let i = 0; i < array.length; i++) {
        uniqueObjects.set(array[i][key], array[i]);
    }
    return Array.from(uniqueObjects.values());
}

// Example usage
const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" }
];
const uniqueData = removeDuplicates(data, 'id');
console.log(uniqueData); // Output: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]