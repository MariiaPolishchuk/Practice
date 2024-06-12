//1
function Car(make, model, year, color, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
}

function Garage() {
    this.cars = [];
}

Garage.prototype.addCar = function (make, model, year, color, price) {
    const newCar = new Car(make, model, year, color, price);
    this.cars.push(newCar);
    return "New car was added: " + make + " " + model;
}

const myGarage = new Garage();


function addCarToGarage() {
    const make = document.getElementById("makeInput").value;
    const model = document.getElementById("modelInput").value;
    const year = parseInt(document.getElementById("yearInput").value);
    const color = document.getElementById("colorInput").value;
    const price = parseFloat(document.getElementById("priceInput").value);
    myGarage.addCar(make, model, year, color, price);
    document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => input.value = '');
    displayCars();
}

function displayCars() {
    const carList = document.getElementById("carList");
    carList.innerHTML = "";
    myGarage.cars.forEach(function (car, index) {
        const listItem = document.createElement("li");
        listItem.classList.add('car-item')
        listItem.textContent = car.make + " " + car.model + " (" + car.year + ")" + car.color + car.price;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete car";
        deleteButton.classList.add("delete-button");


        deleteButton.addEventListener("click", function () {
            myGarage.cars.splice(index, 1);
            displayCars();
        });

        listItem.appendChild(deleteButton);

        carList.appendChild(listItem);
    });
}


displayCars();


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