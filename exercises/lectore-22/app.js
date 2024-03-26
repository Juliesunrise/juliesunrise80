const classes = ['first', 'second', 'third', 'fourth'];

//Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір.
// Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
let hTag=document.getElementsByTagName('h1')

//console.log(hTag)
//console.log(hTag.nodeType)
 for(let i=0;i<hTag,length;i++){

     console.log(hTag)
 }

//Завдання 2: Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"
let p1=document.querySelector('#p1')
p1.style.backgroundColor='gold'

//Завдання 3:Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;
let p2=document.querySelector('#p2')
p2.style.backgroundColor='gold'
p2.style.color = 'blue';
p2.style.fontSize = '2rem'

//Завдання 4:Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third
let p3=document.querySelector('#p3')
p3.className += 'third'
console.log(p3)

//Завдання 5:Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. Призначити для нього класи fourth та border
let p4=document.querySelector('#p4');
p4.classList.add('fourth', 'border')
console.log(p4)

//Завдання 6:Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.
let contain=document.getElementsByClassName('container')
console.log(contain)
for (let element of contain) {
    console.log(element.firstElementChild)
}

//Завдання 7:Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.
let contain2=document.getElementsByClassName('container')
console.log(contain2)
for (let element of contain2) {
    console.log(element.firstElementChild.firstElementChild.innerText)
}

//Завдання 8:Знайти колекцію всіх елементів з селектором '.container header',
// зберегти її в змінній headers. Використовуючи цикл for для отриманої колекції headers,
// замінити заголовки h1 таким чином:

// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4 зберегти початкові атрибути id та class




let headers=document.querySelectorAll('.container header')

console.log(headers)
for(let i=0;i<headers.length;i++) {
    let firstTag = headers[i].firstElementChild;
    let text=firstTag.textContent;
    let attrId=firstTag.getAttribute('id');
    let attrClass=firstTag.getAttribute('class');
   // console.log(attrClass)
    let newHtml="<h"+(i+1)+">"+text+"</h"+(i+1)+">";
    firstTag.innerHTML=newHtml;
    firstTag.setAttribute('id',attrId);
   firstTag.setAttribute('class',attrClass)
    console.log(newHtml)
   console.log(firstTag.getAttribute('id'))
    console.log(firstTag.getAttribute('class'))
}

