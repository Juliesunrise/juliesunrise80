const alert = document.querySelector('.alert');

//Завдання 1: Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick.
// Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert та змінює
// значення властивості textContent цього елемента на "A simple primary alert—check it out!".

const primary=document.querySelector('.btn-primary')
const al=document.querySelector('.alert')
console.log(al.classList)
function clickOnPrime(){
    al.classList.add('alert-primary');
    al.textContent='A simple primary alert—check it out!'
}

primary.addEventListener('click',clickOnPrime)
console.log(al.innerText)


//Завдання 2:Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click".
// Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert
// та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"

const myBtn=document.querySelector('.btn-secondary');
const myBtn_2=document.querySelector('.alert')
console.log(myBtn)
function clickOnSecondary(){
    myBtn_2.classList.add('alert-primary');
    myBtn_2.textContent='A simple secondary alert—check it out!'
}
myBtn.addEventListener('click',clickOnSecondary)

//Завдання 3:Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover".
// Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з
// id = alert та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"
//
// Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout, що видаляє CSS-клас
// alert-success з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.

const success=document.querySelector('.btn-success');

function clickOnSuccess(){
    myBtn_2.classList.add('alert-success');
    myBtn_2.textContent='A simple success alert—check it out!'
}

success.addEventListener('mouseover',clickOnSuccess)

function removeClass() {
    myBtn_2.classList.remove('alert-success');
    myBtn_2.textContent=''
}
success.addEventListener('mouseout',removeClass)

//Завдання 4:Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus".
// Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert та змінює
// значення властивості textContent цього елемента на "A simple danger alert—check it out!" Додати до кнопки
// прослуховувач події "focusout". Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger
// з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.

const danger=document.querySelector('.btn-danger')

function focusDanger(){
    myBtn_2.classList.add('alert-danger');
    myBtn_2.textContent='A simple danger alert—check it out!'
}

danger.addEventListener('focus',focusDanger)

function removeClass_2() {
    myBtn_2.classList.remove('alert-danger');
    myBtn_2.textContent=''
}
danger.addEventListener('focusout',removeClass_2)

//Завдання 5:Знайти на сторінці кнопки з класом btn-dark та btn-light.
// Написати функцію toggleMode, що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle().
// Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку.
// Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки,
// якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light
const btn_d=document.querySelector('.btn-dark')//.addEventListener('click',toggleMode);
const btn_l=document.querySelector('.btn-light')//('click',toggleMode)
const btnDarkMode=document.body.querySelector('.dark-mode');
console.log(btn_d);
console.log(btn_l);
console.log(btnDarkMode);
//Працюючий код----------------------------------------------------------------------------

/*btn_d.addEventListener('click',function (){
    document.body.classList.toggle('dark-mode');
    btn_d.classList.add('hide')
    btn_l.classList.remove('hide')
})
btn_l.addEventListener('click',function (){
    document.body.classList.remove('dark-mode');
    btn_l.classList.add('hide');
    btn_d.classList.remove('hide')
})
*/
//Працюючий код----------------------------------------------------------------------------

btn_l.classList.add('hide')
function toggleMode() {

    if (btn_d) {
        document.body.classList.toggle('dark-mode');
        btn_d.classList.toggle('hide')
        btn_l.classList.toggle('hide')
    }else if (btn_l){
        document.body.classList.toggle('dark-mode');
        btn_d.classList.toggle('hide')
        btn_l.classList.toggle('hide')
    }
}
btn_d.addEventListener('click',toggleMode);
btn_l.addEventListener('click',toggleMode)


//завдання 6:Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress".
// Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter".
// Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault().
// Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert та змінити значення
// властивості textContent цього елемента на "A simple info alert—check it out!";
let alertInfo= document.querySelector('.alert');
let info=document.querySelector('.btn-info')
info.addEventListener('keypress',function (e){
    if (e.key==='Enter'){
        e.preventDefault();
        alertInfo.classList.add('alert-info');
        alertInfo.textContent="A simple info alert—check it out!"
    }
})

//Завдання 7:Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного
// елемента з класом .card-title
let cards=document.querySelectorAll('.card');
function cardT(){

for (let card of cards ){
   let cardTitle=card.querySelector('.card-title');
    console.log(cardTitle)
}}

console.log(cards)

//Завдання 8:Знайти на сторінці всі селектори .card. Використовуючи цикл for, знайти для кожного елемента .card
// кнопку з класом .add-to-cart, додати для кожної кнопки обробник події click, що викликає функцію,
// яка виводить на консоль вміст кожного елемента з класом .card-title

const cards_2=document.querySelectorAll('.card')
//console.log(cards_2)

for (let element of cards_2) {
    let btn = element.querySelector('.add-to-cart');
    btn.addEventListener('click',cardT)
    }


