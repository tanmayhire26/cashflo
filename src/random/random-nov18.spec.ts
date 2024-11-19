import { removeDuplicates } from './your-file'; // Replace './your-file' with the actual path

describe('removeDuplicates', () => {
  it('should remove duplicate objects based on the specified key', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alice' },
    ];
    const uniqueData = removeDuplicates(data, 'id');
    expect(uniqueData).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  });

  it('should handle an empty array', () => {
    const data: any[] = [];
    const uniqueData = removeDuplicates(data, 'id');
    expect(uniqueData).toEqual([]);
  });

  it('should handle an array with no duplicates', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    const uniqueData = removeDuplicates(data, 'id');
    expect(uniqueData).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ]);
  });

  it('should handle different data types', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: '2', name: 'Bob' },
      { id: 1, name: 'Alice' },
    ];
    const uniqueData = removeDuplicates(data, 'id');
    expect(uniqueData).toEqual([
      { id: 1, name: 'Alice' },
      { id: '2', name: 'Bob' },
    ]);
  });

  it('should handle non-existent key', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alice' },
    ];
    expect(() => removeDuplicates(data, 'age' as keyof any)).toThrow();
  });


});