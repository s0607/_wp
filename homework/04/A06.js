function filterArray(arr, predicate) {
    const result = [];
    for (const item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

// 測試範例
const numbers = [1, 2, 3, 4, 5];
const isEven = num => num % 2 === 0;

const filtered = filterArray(numbers, isEven);
console.log(filtered); // [2, 4]
