//Завдання 1:Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

console.log(str1.length);
console.log(str2.length);
console.log(str1.length == str2.length);
console.log(str1 === str2);
//Відповідь: ці рядки абсолютно однакові
   
//Завдання 2: Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
 
/*let string5 = 'Hello World';

console.log(string5[0]);
console.log(string5.charAt(0));*/

//Завдання 3:повернути символ J рядка str3:
// повернути символ J рядка:
let str3 = "Hello Javascript";

console.log(str3.match('J'));
console.log(str3.search('J'));
console.log(str3[6]);

//Завдання 4: Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
/*console.log(str3[str3.length - 1]);
console.log(str3.charAt(str3.length - 1));*/

//Завдання 5: Напишіть три варіанти функції lastChar, що повертає останній символ рядка
  //Варіант 1
/*function lastChar(str3) {
    return (str3[str3.length - 1])
}

console.log(lastChar(str3))*/

//Варіант 2
  
/*let lastChar2=function (str3) {
    return (str3.charAt(str3.length - 1));
}
console.log(lastChar2("Hello Javascript"))*/

//Варіант 3
let lastChar = str3 => str3.charAt(str3.length-1);
console.log(lastChar(str3));



//Завдання 6: Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey

/*let a = 'When candles are out,';
let b = 'all cats are grey.';

console.log(a.concat('',b));*/

//Завдання 7:Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15

let fact = "Fifteen is the same as"
let a = 5;
let b = 10;

console.log(fact + ' ' + (a + b));

//Завдання 8: Напишіть функцію getFullName, що повертає результат: "Tom Cat"

let firstName = "Tom";
let lastName = "Cat";

function getFullName(name,surname) {
    return (name +' '+surname);    
}
console.log(getFullName(firstName, lastName))

//Завдання 9: Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
function greeting(callback) {
    callback = getFullName(firstName, lastName);
    let name = callback;
    return 'Hello,' + `${name}`+'!';
}

console.log(greeting());

//Завдання 10: Використовуючи функцію greeting, створити такий шаблон:
//<div><h1>Hello, Tom Cat!</h1></div>
 
/*let div = document.createElement('div')
console.log(div);
document.body.append(div);
let heading = document.querySelector('div')
div.insertAdjacentHTML('afterbegin', '<h1></h1>')
let head = document.querySelector('h1')
head.innerHTML=greeting()*/
let heading=(""+""+greeting(firstName,lastName)+"")
console.log(heading)
//Завдання 11
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"
console.log(string1)
console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'
console.log(phoneNumber);
console.log(phoneNumber.trim());
console.log(phoneNumber.trimStart());

//Завдання 12:
//Перевірити, чи містить рядок значення 'look up'
//Перевірити, чи містить рядок значення 'look on'
//Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції

/*let sentence = 'Always look on the bright side of life';
console.log(sentence.match('look up'));
console.log(sentence.includes('look on'));

let myString=sentence.match('look on',8)
console.log(myString);*/

//Завдання 13:
//Знайти індекс символу 'l'
//Знайти індекс символу 'l', починаючи з 3-ї позиції
//Знайти індекс символу 'L'

/*let sentence = 'Always look on the bright side of life';

console.log(sentence.indexOf('l'));
console.log(sentence.indexOf('l', 3));
console.log(sentence.indexOf('L'));*/

//Завдання 14:
//Отримати підрядок 'look on the bright side of life'
//Отримати підрядок 'Always'
//Отримати підрядок 'look'

/*let sentence = 'Always look on the bright side of life';
console.log(sentence.slice(7));
console.log(sentence.slice(0, 7));
console.log(sentence.slice(7, 11));

console.log(sentence.substring(7));
console.log(sentence.substring(0, 7));
console.log(sentence.substring(7, 11));*/


//Завдання 15: Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.

let userName = /^[a-z0-9_-]{8,16}$/




//Завдання 16: Створити регулярний вираз, який призначений для перевірки email на коректність.

let email = /^[^\s@]+@[\s@]+\.[^\s@]+$/

//Завдання 17:
//Напишіть функцію  скорочення тексту до 50 символів, використовуючи метод substring
//Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr

let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

/*function truncateText(sentence) {
    return (sentence.substring(0,50))
}
console.log(truncateText(sentence))*/

let truncateText = sentence => sentence.substr(0,50)
console.log(truncateText(sentence))