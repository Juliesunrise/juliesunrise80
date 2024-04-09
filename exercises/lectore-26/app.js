//Завдання 1:
//Функція calculate() приймає масив чисел як аргумент і повертає суму:
//Зробити calculate() функцією вищого порядку, змусивши її підтримувати операцію додавання над масивом чисел та операцію
// множення над масивом чисел
// calculate(operation, initialValue, numbers) приймає перший аргумент - функцію, яка описує операцію, другий аргумент -
// початкове значення, третій аргумент - масив чисел.
// calculate(sum, 0, [1, 2, 4]); // => 7 calculate(multiply, 1, [1, 2, 4]); // => 8

/*
function calculate(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}*/

let numbers=[1, 2, 4]
function calculate(operation,initialValue,numbers){
    return numbers.reduce (operation,initialValue)
}

console.log(calculate(sum, 0, [1, 2, 4]))
console.log(calculate(multiply, 1, [1, 2, 4]))

// sum() - це функція, яка описує операцію додавання.
function sum(n1, n2) {
    return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.

function multiply(n1, n2) {
    return n1 * n2;
}

//Завдання 2:
//Маємо масив student_names
//Застосувати до масиву student_names метод map, щоб отримати на консолі результат у такому вигляді:
// // name: Wick | index: 0 | array: [ "Wick", "Malcolm", "Smith" ] name: Malcolm | index: 1 | array: [ "Wick", "Malcolm", "Smith" ]
// name: Smith | index: 2 | array: [ "Wick", "Malcolm", "Smith" ]

let student_names = ["Wick", "Malcolm", "Smith"]
let result=student_names.map((el, i,arr)=>{
    console.log('name'+':'+el+'|'+'index'+':'+i+'|'+'array'+':'+'['+arr+']')
  })

//Завдання3:
//Маємо масив об'єктів students_information, що представляє результати іспитів кожного студента у полі degree:
//Максимальна оцінка degree = 600 Розрахувати відсоткове значення отриманої оцінки по кожному студенту,
// використовуючи метод map, та вивести на консоль отриманий результат у такому вигляді://
// { name: "Wick", degree: 375, percentage: 62.5 }
// { name: "Malcolm", degree: 405, percentage: 67.5 }
// { name: "Smith", degree: 453, percentage: 75.5 }

 let students_information = [
    {"name": "Wick", "degree": 375},
    {"name": "Malcolm", "degree": 405},
    {"name": "Smith", "degree": 453},
];
let degMax=600

let info=students_information.map(student=>{
    let percentage=(student.degree/degMax)*100;
    console.log ({name:student.name,degree:student.degree,percentage:percentage});
})

//Завдання 4:
//Маємо масив :
//Використовуючи метод reduce, звести масив до одномірного
//[ 1, 2, 3, 10, 11, 12, 21, 22, 23, 31, 32, 33, 34, 41, 42 ]

let arrR=[1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]]

let arr2=arrR.reduce((a,b)=> {
    return a.concat(b)
},[])
console.log(arr2)

//Завдання 5:
//Створити конструктор прототипу масиву upperCase(), що перетворює символи рядка у символи верхнього регістру.

Array.prototype.upperCase=function(){
    let i;
    for(i=0;i<this.length;i++){
        this[i]=this[i].toUpperCase()
    }
};
function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}

myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]

