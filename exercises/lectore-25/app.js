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

let URL

let ol=document.createElement('ol');
parentElement.append(ol);
console.log(ol)
for(let i=0;i<listWithHref.length;i++){
    let li2 = document.createElement('li');
    let a=document.createElement('a');
       for (let obj in listWithHref ){
           let link = listWithHref[obj];
            for(let key in link) {
               URL=link[key];
               console.log(URL);

        }
    }
    ol.appendChild(li2);
    li2.appendChild(a);
    a.appendChild(document.createTextNode(list[i]));
    a.href=URL;
}

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
