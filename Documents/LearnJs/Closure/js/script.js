//1 исправть ошибку :
// Описати у чому помилка і виправити код. помилка у тому що коли функція, передана до setTimeout, викликається, змінна i має останнє значення, що дорівнює 10, тому всі виведені значення будуть 10.
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 0);
// }
// Треба вивести від 1 до 10.
// зараз змінна буде мати правильне значення для кожної ітерації циклу, оскільки використовуємо замикання для передачі значення в момент створення кожного setTimeout. 

for (var i = 1; i <= 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 0);
  })(i);
}

//2
function createAdder2(baseNum) {
  return function (num) {
    return baseNum + num;
  }
}

let addTwo = createAdder2(2);
console.log(addTwo(5));

// 3

function sum(x) {
  return function (y) {
    return x + y;
  };
}

const sum1 = sum(1);
console.log(sum1(2));
console.log(sum(1)(2));


//4 самовызывающаяся и замыкание! установить и поменять число число:

const myNumber = (function () {
  let x = 10;

  function getX() {
    return x;
  }

  function setX(newX) {
    x = newX;
    return x;
  }

  return {
    getX, setX
  }
})();

console.log(myNumber.getX());
myNumber.setX(20);
console.log(myNumber.getX());


//5 createCounter

function createCounter(initialValue) {
  let count = initialValue
  return {
    increment: function () {
      count++
    },
    getValue: function () {
      return count
    }
  }
}

const counter = createCounter(5);
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());


//6. Задача: Счётчик операций с различными функциями
// Условие:
// Напишите функцию-конструктор createOperationCounter, которая создаёт замыкание с переменной count. Функция должна возвращать объект с двумя методами:
// 1 = performOperation(a, b, operationFunc) - принимает два числа и функцию операции, выполняет операцию и возвращает результат. Каждый раз при вызове этого метода count увеличивается на 1.
// 2 = getOperationCount() - возвращает текущее значение count.
// Напишите несколько функций операций, таких как add (сложение), subtract (вычитание), multiply (умножение), и используйте их с вашим счетчиком операций.


function createOperationCounter() {
  let count = 0
  return {
    performOperation: function (a, b, operationFunc) {
      count++;
      return operationFunc(a, b);
    },
    getOperationCount: function () {
      return count
    }

  }
}


const counter1 = createOperationCounter();

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(counter1.performOperation(5, 3, add));
console.log(counter1.performOperation(10, 4, subtract));
console.log(counter1.performOperation(7, 2, add));

console.log(counter1.getOperationCount()); // operation number 3


// 7. Задача: Создание счетчика кликов по разным кнопкам
// Напишите функцию createButtonCounter, которая создает и возвращает объект с методами для управления счетчиками кликов по разным кнопкам. Каждый метод должен позволять:

// Добавлять кнопку (с уникальным идентификатором).
// Увеличивать счетчик кликов для определенной кнопки.
// Получать текущее количество кликов для определенной кнопки.

function createButtonCounter() {
  const buttons = {};

  return {
    addButton: function (id) {
      if (!buttons[id]) {
        buttons[id] = 0
      }
    },
    clickButton: function (id) {
      if (buttons[id] !== undefined) {
        buttons[id]++
      } else {
        console.log(`Button with id ${id} does not exist.`);
      }
    },
    getButtonClickCount: function (id) {
      return buttons[id] !== undefined ? buttons[id] : `Button with id ${id} does not exist.`;

    }
  };
}

const buttonCounter = createButtonCounter();

buttonCounter.addButton('button1');
buttonCounter.addButton('button2');

buttonCounter.clickButton('button1');
buttonCounter.clickButton('button1');
buttonCounter.clickButton('button2');

console.log(buttonCounter.getButtonClickCount('button1'));
console.log(buttonCounter.getButtonClickCount('button2'));
console.log(buttonCounter.getButtonClickCount('button3')); //not exist



// 8. Задача: Реализация функции для работы с покупками
// Напишите функцию createShoppingList, которая создает объект для работы с покупками. Объект должен содержать методы для добавления товаров в список покупок, удаления товаров из списка и подсчета общей стоимости покупок.

// Требования:
// addItem(name, price): Добавляет товар в список покупок. Если товар с таким именем уже есть в списке, увеличивает его количество на 1.
// removeItem(name): Удаляет товар из списка покупок. Если товара с указанным именем нет в списке, выводит сообщение об ошибке.
// getTotalCost(): Возвращает общую стоимость всех товаров в списке покупок.

function createShoppingList() {
  let items = {};

  return {
    addItem: function (name, price) {
      if (items[name]) {
        items[name].quantity++;
      } else {
        items[name] = {
          quantity: 1,
          price: price
        };
      }
    },
    removeItem: function (name) {
      if (items[name]) {
        delete items[name];
      } else {
        console.log(`This ${name} isn't found`);
      }
    },
    getTotalCost: function () {
      let totalPrice = 0;
      for (let itemName in items) {
        totalPrice += items[itemName].quantity * items[itemName].price;
      }
      return totalPrice;
    },
    getTotalQuantity: function () {
      let totalQuantity = 0;
      for (let itemName in items) {
        totalQuantity += items[itemName].quantity;
      }
      return totalQuantity;
    },
    getItemPrice: function (name) {
      return items[name] ? items[name].price : `Item ${name} not found`;
    },
    getAllItems: function () {
      return items;
    }
  };
}

const shoppingList = createShoppingList();

shoppingList.addItem('Apple', 10);
shoppingList.addItem('Banana', 15);
shoppingList.addItem('Apple', 10);

console.log('Total quantity:', shoppingList.getTotalQuantity()); 
console.log('Total cost:', shoppingList.getTotalCost());


console.log('Price of Apple:', shoppingList.getItemPrice('Apple'));
console.log('Price of Banana:', shoppingList.getItemPrice('Banana'));


console.log('All items:', shoppingList.getAllItems());

