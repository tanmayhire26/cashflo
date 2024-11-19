function removeDuplicates<T>(array: T[], key: keyof T): T[] {
    const uniqueObjects = new Map<any, T>();
    array.forEach(item => uniqueObjects.set(item[key], item));
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