// 1
// Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function() { console.log("Вы согласились."); }, // нужно обновить данное место
//   function() { console.log("Вы отменили выполнение."); } // нужно обновить данное место
// );


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

ask(
    "Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
);


//2 
// Напишите код который преобразует строку 'my-short-string' в массив значений ['my', 'short', 'string'].

let str = 'my-short-string';
let arr = str.split('-')
console.log(arr);


//3
let arr1 = ['JavaScript', 2015];
let str1 = arr.join(' ');
console.log(str1);

//4
// Отфильтровать всех пользователей которые старше 20 лет. Дан массив данных:
// let users = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
// Должны получить следующий результат: [{id: 3, name: "Jon", age: 5}].

let users = [
    { id: 1, name: "Vic", age: 21 },
    { id: 2, name: "Petya", age: 30 },
    { id: 3, name: "Jon", age: 5 }
];

let filteredUsers = users.filter(user => user.age <= 20);
console.log(filteredUsers);


//5 
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// let users = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
// let names = /* ... ваш код */
// console.log( names ); // [Vic, Petya, Jon]

let users1 = [
    { id: 1, name: "Vic", age: 21 },
    { id: 2, name: "Petya", age: 30 },
    { id: 3, name: "Jon", age: 5 }
];
let names = users1.map(user => user.name);
console.log(names);


//6 Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log( arr ); // [3, 1]

let arr2 = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (a <= arr[i] <= b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr3 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);
console.log(arr3);