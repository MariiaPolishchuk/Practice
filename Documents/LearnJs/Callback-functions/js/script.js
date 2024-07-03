// 1. Напиши функцию greet, которая принимает два параметра: имя (строка) и функцию обратного вызова (callback). Внутри greet нужно выполнить функцию обратного вызова с приветственным сообщением.

function greet(name, callback) {
    callback(`Hello, ${name}!`)
}

function displayMessage(message) {
    console.log(message)
}

greet('Bob', displayMessage)

// 2.Напиши функцию calculate, которая принимает три параметра: два числа и функцию обратного вызова (callback). Функция calculate должна передать эти два числа в функцию обратного вызова и вернуть результат выполнения этой функции.

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function calculate(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calculate(2, 3, add))
console.log(calculate(5, 3, subtract));


//3. Напиши функцию processArray, которая принимает два параметра: массив чисел и функцию обратного вызова (callback). Функция processArray должна применить функцию обратного вызова к каждому элементу массива и вернуть новый массив с результатами.

function square(num) {
    return num * num;
}

function double(num) {
    return num * 2;
}

function processArray(arr, callback) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(callback(arr[i]))
    }
    return res
}

console.log(processArray([1, 2, 3, 4], square));


//4. Напиши функцию filterArray, которая принимает два параметра: массив чисел и функцию обратного вызова (callback). Функция filterArray должна возвращать новый массив, содержащий только те элементы исходного массива, для которых функция обратного вызова возвращает true.

function filterArray(arr1, callback) {
    let res2 = []
    for (let i = 0; i < arr1.length; i++) {
        if (callback(arr1[i])) {
            res2.push(arr1[i]);
        }
    }

    return res2
}

function isGreaterThanThree(num) {
    return num > 3;
}

console.log(filterArray([3, 4, 5], isGreaterThanThree))


//5. Напиши функцию mapArray, которая принимает два параметра: массив чисел и функцию обратного вызова (callback). Функция mapArray должна возвращать новый массив, где каждый элемент является результатом применения функции обратного вызова к соответствующему элементу исходного массива.


function mapArray(arr2, callback) {
    let newArr = []
    for (let i = 0; i < arr2.length; i++) {
        newArr.push(callback(arr2[i]))
    }

    return newArr
}

function muptiply(num) {
    return num * 2
}

console.log(mapArray([2, 3, 4], muptiply))


//6. Напиши функцию findLongestName, которая принимает массив строк (имен) и функцию обратного вызова (callback). Функция findLongestName должна использовать callback функцию для фильтрации имен и вернуть самое длинное имя из массива, удовлетворяющее условию callback. Если такое имя не найдено, функция должна вернуть null.


function findLongestName(names, callback) {
    let longestName = '';
    for (let i = 0; i < names.length; i++) {
        const currentName = names[i];
        if (callback(currentName)) {
            if (!longestName || currentName.length > longestName.length) {
                longestName = currentName
            }
        }
    }

    return longestName;
}



const names = [' Alice ', 'Bob', 'charlie', ' anna', 'Alexandra'];
const longestNameStartingWithA = findLongestName(names, function (name) {
    return name.trim().toLowerCase().startsWith('a');
});

console.log(longestNameStartingWithA)


//7. Напишите функцию filterNames, которая принимает массив имен и callback функцию в качестве аргументов. Функция filterNames должна фильтровать имена в массиве с помощью callback функции и возвращать новый массив отфильтрованных имен.

const namesArr = [' Alice ', 'Bob', 'charlie', ' anna', 'Alexandra'];
function startsWithLetterA(name) {
    return name.trim().toLowerCase().startsWith('a');
}

function filterNames(namesArr, callback) {
    let filteredNames = []
    for (let i = 0; i < namesArr.length; i++) {
        const currentName = namesArr[i]
        if (callback(currentName)) {
            filteredNames.push(currentName);
        }
    }
    return filteredNames
}

const filteredNamesStartingWithA = filterNames(namesArr, startsWithLetterA);

console.log(filteredNamesStartingWithA)


//8. Напишите функцию calculateTotal, которая вычисляет общую сумму чисел в массиве с помощью callback функции для определения значений, которые нужно сложить.
// Требования:
// Аргументы функции:
// numbers: Массив чисел, для которых нужно вычислить сумму.
// callback: Функция обратного вызова, которая определяет, какие элементы массива должны быть включены в вычисление суммы. Callback функция принимает один параметр (число) и возвращает true, если число должно быть включено в сумму, и false в противном случае.
// Результат:
// Функция calculateTotal должна вернуть общую сумму чисел в массиве, для которых callback функция вернула true.

function isEven(number) {
    return number % 2 === 0;
}

function calculateTotal(numbers, callback) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (callback(numbers[i])) {
            total += numbers[i]
        }
    }
    return total
}

console.log(calculateTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven))

//9. Input info привести к нижнему регистру и заменить пробел на '_'

function transformInput(input) {
    return input.toLowerCase().replace(/\s/g, '_');
}

function processInput(inputValue, callback) {
    return callback(inputValue);
}

document.getElementById('sendButton').addEventListener('click', function () {
    const inputValue = document.getElementById('textInput').value;
    const processedValue = processInput(inputValue, transformInput);
    console.log(processedValue);
});



//10. 

function createReusableCounter() {
    const a = 10
    return function(a, b, myFunc) {
        return myFunc(a, b);
    };
}

function multiply(a, b) {
    return a * b;
}

const counter = createReusableCounter();
const multiplyRes = counter(2, 8, multiply);
console.log(multiplyRes); 
