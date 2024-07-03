//1
// Реализуйте обьект counter. У которого есть три метода: up, down, showStep. 
// При вызове метода up, counter должен увеличиваться на 1
// При вызове метода down, counter должен уменьшатся на 1
// При вызове метода showStep, должен вернутся текущее значение.
// 	Реализовать при помощи ключевого слова this.
// 	counter.up();
// 	counter.up();
// 	console.log(counter.showStep()) // выведет 2

const counter = {
    value: 0,
    up: function () {
        this.value += 1
    },
    down: function () {
        this.value -= 1
    },
    showStep: function () {
        return this.value
    }
}
counter.up();
counter.up();
console.log(counter.showStep())

//2
// Реализуйте функцию конструктор Calculator. Данная функция конструктор должна предоставлять следующие методы: sum, multiply, subtract, divide. Данные методы должны работать через замыкание. Данные методы должны возвращать результат математических вычислений. После имплементации продемонстрируйте работу данных методов: выведете в консоль результаты вычислений.
// 	let calculator = new Calculator();
// 	console.log(calculator.sum(1)(2)); // результат 3


function Calculator() {
    this.sum = function (a) {
        return function (b) {
            return a + b;
        };
    };

    this.multiply = function (a) {
        return function (b) {
            return a * b;
        }
    }

    this.subtract = function (a) {
        return function (b) {
            return a - b;
        }
    }

    this.divide = function (a) {
        return function (b) {
            return a / b;
        }
    }
}

let calculator = new Calculator();
console.log(calculator.sum(1)(2));       
console.log(calculator.multiply(3)(4));  
console.log(calculator.subtract(10)(5)); 
console.log(calculator.divide(20)(4)); 


//realization via prototype

function newCalculator() {}

newCalculator.prototype.sum = function(a) {
    return function(b) {
        return a + b;
    };
};

newCalculator.prototype.multiply = function(a) {
    return function(b) {
        return a * b;
    };
};

newCalculator.prototype.subtract = function(a) {
    return function(b) {
        return a - b;
    };
};

newCalculator.prototype.divide = function(a) {
    return function(b) {
        return a / b;
    };
};

let calculator1 = new newCalculator();
console.log(calculator1.sum(1)(2));       // Output: 3
console.log(calculator1.multiply(3)(4));  // Output: 12
console.log(calculator.subtract(10)(5)); // Output: 5
console.log(calculator.divide(20)(4));   // Output: 5
