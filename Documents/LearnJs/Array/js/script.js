function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade
}

Student.prototype.getInfo = function () {
    return "Name: " + this.name + ", Age: " + this.age + ", Average Grade: " + this.grade;
}

const students = [
    new Student("Иван", 20, 4.5),
    new Student("Мария", 21, 5.0),
    new Student("Алексей", 19, 4.2),
    new Student("Елена", 22, 3.8)
];

function getExcellentStudents(students) {
    return students.filter(student => student.grade === 5)
}

function getGoodStudents(students) {
    return students.filter(student => student.grade >= 4 && student.grade < 5);
}

const excellentStudents = getExcellentStudents(students);
const goodStudents = getGoodStudents(students);

console.log("Excellent:");
excellentStudents.forEach(student => {
    console.log(student.getInfo())
});

console.log("Good:")
goodStudents.forEach(student => {
    console.log(student.getInfo())
})



//2 
// Задача:
// У вас есть массив студентов с их именами и оценками. Напишите функции, которые выполняют следующие действия:

// Возвращает массив имен всех студентов.
// Возвращает массив имен студентов, которые имеют оценку выше 4.
// Возвращает среднюю оценку всех студентов.
// Увеличивает оценку каждого студента на 1 балл (не выше 5).
// Возвращает объект, где ключи — это оценки, а значения — массивы имен студентов, которые получили эти оценки.

const students1 = [
    { name: 'Alice', grade: 4.5 },
    { name: 'Bob', grade: 3.8 },
    { name: 'Charlie', grade: 5.0 },
    { name: 'David', grade: 4.2 },
    { name: 'Eve', grade: 2.9 }
];

function getNames(students1) {
    return students1.map(student => student.name)
}

function getTopStudents(students1) {
    return students1.filter(student => student.grade > 4).map(student => student.name)
}

function getAverageGrade(students1) {
    const AverageGrade = students1.reduce((sum, student) => sum + student.grade, 0)
    return AverageGrade / students1.length;
}

function increaseGrades(students1) {
    return students1.map(student => {
        let newGrade = student.grade + 1
        if (newGrade < 5) newGrade = 5
        return { name: student.name, grade: newGrade };
    })
}

function groupStudentsByGrade(students1) {
    return students1.reduce((result, student) => {
        const keyGrade = student.grade.toFix(1)
        if (!result[keyGrade]) {
            result[keyGrade] = [] //если не сущесвует то создается
        }
        result[keyGrade].push(student.name)
        return result
    }, {});
}

console.log(groupStudentsByGrade(students1)); 
