//reduce
//1.

function sumArray(arr) {
    return arr.reduce((acc, currentValue) => acc + currentValue, 0)
}

const numbers = [2, 4, 5];
const sum = sumArray(numbers)
console.log(sum)

//2.
function countQuantity(arr) {
    return arr.reduce((acc, currentValue) => {
        acc[currentValue] = (acc[currentValue] || 0) + 1;
        return acc;
    }, {});
}

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const res = countQuantity(fruits);
console.log(res);


//3. 
function findMostFrequent(arr) {
    const countOccurrences = arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    const keys = Object.keys(countOccurrences);
    if (keys.length === 0) {
        return null;
    }

    const mostFrequent = keys.reduce((a, b) => {
        return countOccurrences[a] > countOccurrences[b] ? a : b;
    }, keys[0]);

    return mostFrequent;
}

const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
const mostFrequent = findMostFrequent(items);
console.log(mostFrequent); // "apple"


//4. Напишите функцию flattenArray, которая принимает двумерный массив (массив массивов) и использует метод reduce, чтобы "расплющить" его в одномерный массив.

function flattenArray(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(curr);
    }, []);
}

const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
const result = flattenArray(nestedArray);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//5. Напишите функцию calculateAverage, которая принимает массив чисел и возвращает их среднее значение.

function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0
    }
    const sum = arr.reduce((acc, curr) => acc + curr, 0)
    return sum / arr.length
}

const numbers1 = [1, 2, 3, 4, 5, 6]
const res1 = calculateAverage(numbers1)
console.log(res1)

//6. Напишите функцию mergeObjects, которая принимает массив объектов и объединяет их в один объект. Если объекты имеют одинаковые ключи, значения этих ключей должны быть суммированы.

const objectsArray = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, d: 6 },
    { a: 7, c: 8, e: 9 }
];

function mergeObjects(arr) {
    return arr.reduce((acc, obj) => {
        for (let key in obj) {
            acc[key] = (acc[key] || 0) + obj[key];
        }
        return acc;
    }, {});
}

const mergedObject = mergeObjects(objectsArray);
console.log(mergedObject);


//7.

function mergeAndSum(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const sum = mergedArray.reduce((acc, val) => acc + val, 0);
    return sum;
}

const arr1 = [2, 3, 5]
const arr2 = [3, 4, 6]

const res2 = mergeAndSum(arr1, arr2)
console.log(res2)

//8. findMax

function findMax(arr) {
    return arr.reduce((max, curr) => {
        return curr > max ? curr : max;
    }, arr[0]);
}

const nums = [2, 6, 9, 22]
const res3 = findMax(nums)
console.log(res3)


//