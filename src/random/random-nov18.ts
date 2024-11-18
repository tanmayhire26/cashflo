function removeDuplicates<T>(array: T[], key: keyof T): T[] {
    return [...new Map(array.map(item => [item[key], item])).values()];
}
const data = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}, {id: 1, name: "Alice"}];
const uniqueData = removeDuplicates(data, 'id');
console.log(uniqueData);