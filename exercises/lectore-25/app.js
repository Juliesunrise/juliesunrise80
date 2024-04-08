//Завдання 1:
//Маємо масив list.Використовуючи метод createElement, створити невпорядкований список на основі масиву
// list та вставити його на сторінку.

const list = ['html', 'css', 'javascript', 'react.js'];
let parentElement=document.querySelector('body');
let ul=document.createElement('ul');
parentElement.append(ul)

for(let i=0;i<list.length;i++) {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(list[i]))
    ul.append(li)
}
console.log(ul)

//Завдання 2:
//Маємо масив listWithHref.Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref,
// де кожний елемент списку є тегом a з відповідним посиланням. Наприклад, для першого елемента списку:
//  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
//Додайте створений список на сторінку.

const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"},
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"},
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    {'react.js': "https://react.dev"}
];

let ol=document.createElement('ol')
listWithHref.forEach((elem)=>{
    let key=Object.keys(elem)[0];
    let link=Object.values(elem)[0];
    let listElement=`<li><a href='${link}'>${key}</a></li>`;
    ol.insertAdjacentHTML('beforeend',listElement);
})
document.body.appendChild(ol)
console.log(ol)

//Завдання 3:
//Маємо масив students.Використовуючи метод createElement, створити таблицю на основі масиву students.
// Заголовки стовпчиків таблиці - firstName, lastName, degree.
// Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку.

const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]
let table=document.createElement('table');
let head=document.createElement('thead');
let body=document.createElement('tbody');

let fKey
let secKey
let lastKey

students.forEach((elem)=>{
    fKey=Object.keys(elem)[0];
    secKey=Object.keys(elem)[1];
    lastKey=Object.keys(elem)[2];

   let fName=Object.values(elem)[0];
   let lName=Object.values(elem)[1];
   let deg=Object.values(elem)[2];
   let tbody=`<tr><td>${fName}</td><td>${lName}</td><td>${deg}</td></tr>`
    body.insertAdjacentHTML('beforeend',tbody);

})

let headRow=`<tr><th>${fKey}</th><th>${secKey}</th><th>${lastKey}</th></tr>`
head.insertAdjacentHTML('beforeend',headRow);

document.body.append(table)
table.append(head)
table.append(body)

head.style.backgroundColor='blue'
head.style.color='azure'
table.style.width='100%'
body.style.textAlign='center'



