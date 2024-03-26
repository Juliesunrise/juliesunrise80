const classes = ['first', 'second', 'third', 'fourth'];


let hTag=document.getElementsByTagName('h1')

console.log(hTag)
console.log(typeof hTag)


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



/*const headers=document.querySelectorAll('.container header')
let firstTag=headers.firstElementChild
console.log(headers)
console.log(firstTag)*/
/*for (let element of headers){
    let currentElement=element.firstElementChild;
    console.log(currentElement)
    console.log(currentElement.tagName)
    element++
    let newTag;
    switch (currentElement) {
        case 1:
            newTag = 'h2';
            break;
        case 2:
            newTag = 'h3';
            break;
        case 3:
            newTag = 'h4';
            break;
        default:
            break;
    }
    let replacement =document.createElement(newTag);
    replacement.innerHTML=currentElement.innerHTML;
    currentElement.parentNode.replaceChild(replacement, currentElement);
    console.log(replacement)
}*/


/*for (let element of headers){
    let currentElement=element.firstElementChild;
    console.log(currentElement)
    console.log(currentElement.tagName)
    element++
    let newTag;
    switch (currentElement) {
        case 1:
            newTag = 'h2';
            break;
        case 2:
            newTag = 'h3';
            break;
        case 3:
            newTag = 'h4';
            break;
        default:
            break;
    }
    let replacement =document.createElement(newTag);
    replacement.innerHTML=currentElement.innerHTML;
    currentElement.parentNode.replaceChild(replacement, currentElement);
    console.log(replacement)
}

*/


/*for (let element of headers) {
    let currentElement=element.firstElementChild;
    console.log(currentElement)*/

let headers=document.querySelectorAll('.container header')
let firstTag=headers.firstElementChild
console.log(headers.firstElementChild)
//console.log(firstTag)
/*for (let index=1;index<firstTag.length;index++){

    if (index) {
        index++;
        console.log(headers.tagName);
    let newTag;

        switch (firstTag) {
             case 1:
                 newTag = 'h2';
                 break;
             case 2:
                 newTag = 'h3';
                 break;
             case 3:
                 newTag = 'h4';
                 break;
             default:
                 break;
         }

       let replacement =document.createElement(newTag);
  replacement.innerHTML=firstTag.innerHTML;
        firstTag.parentNode.replaceChild(replacement, firstTag);
        console.log(replacement)

    }
}
*/














   /* let currentElement = headers[i];
    let newTagName;
    switch (i) {
        case 1:
            newTagName = 'h2';
            break;
        case 2:
            newTagName = 'h3';
            break;
        case 3:
            newTagName = 'h4';
            break;
        default:
            break;
    }*/

    /*let newElement = document.createElement(newTagName);
    newElement.innerHTML = currentElement.innerHTML;
    currentElement.parentNode.replaceChild(newElement, currentElement)
    console.log(document.getElementsByClassName('title'))*/

