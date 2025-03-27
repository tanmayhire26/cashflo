function removeDuplicates<T>(array: T[], key: keyof T): T[] {
    const uniqueObjects = new Map<any, T>();
    for (let i = 0; i < array.length; i++) {
        uniqueObjects.set(array[i][key], array[i]);
    }
    return Array.from(uniqueObjects.values());
}