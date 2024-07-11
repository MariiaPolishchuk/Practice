function Car(make, model, year, color, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
}

function Garage() {
    const cars = [];
    const makeInput = document.getElementById('makeInput');
    const modelInput = document.getElementById('modelInput');
    const yearInput = document.getElementById('yearInput');
    const colorInput = document.getElementById('colorInput');
    const priceInput = document.getElementById('priceInput');
    const carList = document.getElementById('carList');

    const addCar = function (make, model, year, color, price) {
        const newCar = new Car(make, model, year, color, price);
        cars.push(newCar);
        return "New car was added: " + make + " " + model;
    }

    const addCarFromInput = function () {
        const make = makeInput.value;
        const model = modelInput.value;
        const year = parseInt(yearInput.value);
        const color = colorInput.value;
        const price = parseFloat(priceInput.value);

        const message = addCar(make, model, year, color, price);
        document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => input.value = '');
        displayCars();

        return message;
    }

    const createCarListItem = function(car, index) {
        const listItem = document.createElement("li");
        listItem.classList.add('car-item');
        listItem.textContent = `${car.make} ${car.model} (${car.year}), Color: ${car.color}, Price: $${car.price.toFixed(2)}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete car";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", () => {
            cars.splice(index, 1);
            displayCars();
        });

        listItem.appendChild(deleteButton);
        return listItem;
    }

    const displayCars = function() {
        carList.innerHTML = "";

        cars.forEach((car, index) => {
            const listItem = createCarListItem(car, index);
            carList.appendChild(listItem);
        });
    }

    this.addCarFromInput = addCarFromInput;
    this.displayCars = displayCars;
}

const myGarage = new Garage();

document.getElementById("addCarButton").addEventListener("click", () => {
    myGarage.addCarFromInput();
});

myGarage.displayCars();



//2 Конструктор для создания объектов "Студент"

function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

Student.prototype.getInfo = function () {
    return "Name: " + this.name + ", Age: " + this.age + ", Grade: " + this.grade;
}

Student.prototype.getCategory = function () {
    if (this.grade >= 5) {
        return "Excellent!"
    }

    else if (this.grade >= 4) {
        return "Good!"
    }

    else {
        return "Try Harder!"
    }
}

const student1 = new Student("Ivan", 20, 4.5);
const student2 = new Student("John", 21, 5);

console.log(student1.getInfo());
console.log(student1.getCategory());

console.log(student2.getInfo());
console.log(student2.getCategory());