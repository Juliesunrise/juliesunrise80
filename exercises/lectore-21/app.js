



//завдання 1: Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(' ');
console.log(fruits);

//завдання 2:  Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
/*for (i=0;i<fruits.length;i++){
        console.log(fruits[i]);
}*/

//завдання 3: Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
let i=0
while (i<fruits.length) {
    console.log(fruits[i]);
    i++; 
}

//завдання 4: Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
/* let i=0
do{
    console.log(fruits[i]);
    i++; 
}
while (i<fruits.length)*/


//завдання 5:  Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
/*for (let fruit of fruits){
    console.log(fruit);
}*/
//завдання 6: Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.

const Numbs = [1,2,3,4,5,6,7,8,9,10];

for(let i=1;i<Numbs.length;i++){    
    if(i%2==0){
     console.log(i);
    }   
}

//завдання 7: Додати 'Joker' в кінець масиву names:

/*const names = ['Batman'];
names.push('Joker');
console.log(names);*/

//завдання 8: Додати 'Joker' на початок масиву names

/*const names = ['Batman'];
names.unshift('Joker');
console.log(names);*/

//завдання 9: Додати 'Catwoman' на початок масиву names, використовуючи метод unshift

/*names = ['Batman', 'Joker', 'Bane'];
names.unshift('Catwoman');
console.log(names);
// завдання 10:Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
/*names = ['Batman', 'Joker', 'Bane'];
let newNames=[...names]
newNames.unshift('Catwoman')
console.log(newNames)*/

// завдання 11:Додати до names елемент
//'Catwoman', розмістивши його з 
//індексом 1
/*names = ['Batman', 'Joker', 'Bane'];
names.splice(1,0,'Catwoman');
console.log(names)

// завдання 12: Видалити елементи 'Catwoman' і 'Joker' з масиву names:
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names.splice(1,2)
console.log(names)

// завдання 13: Замінити елементи 'Catwoman' і 'Joker' на 'Alfred'
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
function 
у масиві names
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names.splice(1,2,'Alfred')
console.log(names)

// завдання 14:Перевірити чи існує рядок 'Alfred'
//у масиві names, і якщо не існує,
//додати його до кінця масиву.
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];



//завдання 15:
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
let findName='Alfred';
if(names.includes(findName){
let index=names.indexOf(findName);
names.splice(index,1)
}
console.log(names)