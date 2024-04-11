const ul = document.querySelector('ul');
const input = document.getElementById('item');



/*Створити копію lecture-27 у директорію exercises
Знайти елемент ul у документі та запам'ятати його у змінній ul.
За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray.
 Якщо елемент відсутній, створити його зі значенням [].
Написати функцію addTask(text), що створює елемент li з властивістю textContent, яка дорівнює значенню,
 що передається за допомогою аргументу функції text. Кожний створений елемент li функція повинна додавати до елемента ul.
Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.
Знайти елемент input у документі та запам'ятати його у змінній input.
Написати функцію add(), що додає до масиву itemsArray значення, введене користувачем в полі input,
та зберігає цей масив у localStorage з ключем items, використовуючи метод JSON.stringify.
Одночасно візуалізувати доданий елемент на сторінці, використовуючи функцію addTask.
Написати функцію del(), що чистить localStorage, масив itemsArray та значення властивості ul.innerHTML.*/


let itemsArray=JSON.parse(localStorage.getItem('items'))
console.log(itemsArray)
localStorage.setItem('items','[]')
console.log(localStorage)

function addTask(text) {
  let li=document.createElement('li');
   li.textContent=text;
   document.querySelector('ul').appendChild(li)
  console.log(li)
}

//addTask('javascript its shit')

function add() {
    let input=document.querySelector('input')
    let value=input.value.trim();
    if(value!==" "){
        itemsArray.push(value);
        localStorage.setItem('items',JSON.stringify(itemsArray));
        addTask(value);
        input.value=" "
    }
}

function del() {
    localStorage.removeItem('items');
    itemsArray=[]
    document.querySelector('ul').innerHTML=" "
}




