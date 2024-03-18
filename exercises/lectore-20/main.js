//Завдання 1
//Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль
/*let person = {
    name:'Yuliia',
    age:38
}
console.log(person);*/

//Завдання 2
//Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
/*   let person = {
     userName:{
        firstName: 'Yuliia',
        lastName: 'Makarova'
    },
    age:38
}
console.log(person);*/

//Завдання 3:
//Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.

/*let person = {
    userName:{
        firstName: 'Yuliia',
        lastName: 'Makarova'
    },
    age: 38,
    bio(){
        return 'name' +' '+ `${this.userName.firstName}\n`+
               'surname' +' '+ `${this.userName.lastName}\n`+
               'age'+' '+ `${ this.age }`
    }
}
console.log(person.bio());*/

//Завдання 4:
//Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
 /* let person = {
    userName:{
        firstName: 'Yuliia',
        lastName: 'Makarova'
    },
    age: 38,
    introduceSelf(){
        return 'Hi!' +' '+'I\'m'+' '+ `${this.userName.firstName}`
    }
}
console.log(person.introduceSelf());*/

//Завдання 5
//Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта
/*function createPerson(name) {
    return 
}*/
function createPerson(name){
    return{
      name:name,
         introduseSelf:function(){
           return 'Hello, my name is' +' '+`${this.name}`
         }
        }
     }   
  
 let person1=createPerson('Yuliia');
 let person2=createPerson('Maksim');
 console.log(person1.introduseSelf())
 console.log(person2.introduseSelf())

//Завдання 6
//Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю 
//name та методом introduceSelf.Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
//визначити, чи містить об'єкт mary властивість під назвою prop.
function person(name){
    this.name = name;
    this.introduseSelf=function(){
            return'Hello, my name is' +' '+ `${this.name}`
        }
    }   
 
    let person_1=new person('Mary');
    let person_2=new person('Tom');
    console.log(person_1.introduseSelf());
    console.log(person_2.introduseSelf())

    
    
    if('prop' in person_1){
      console.log('Mary містить властивість \'prop\'')
    }else{
      console.log('Mary не містить властивість \'prop\'')
    }

//Завдання7:
//Брудний мартіні – ідеальний коктейль для любителів оливкового. Його можна приготувати на горілці чи джині за таким рецептом.
let dirtyMartini = {
        gin: '6 fluid ounces gin',
        dryVermouth: '1 dash dry vermouth (0.0351951ml) ',
        oliveBrine: '1 fluid ounce brine from olive jar',
        olives: '4 stuffed green olives',    
    english_please() {
        return 'ingredients:\n' +
            `${this.gin}\n` +
            `${this.dryVermouth}\n` +
            `${this.oliveBrine}\n` +
            `${this.olives}`
    }, excuse_my_french() {
         return 'ingrédients:\n' +
            '170.4786 ml de gin\n' +
            '1 trait de vermouth sec (0.0351951ml)\n' +
            '28.4131 ml de saumure du pot d\'olive \n' +
            '4 olives vertes farcies'
    }
    }

console.log(dirtyMartini.english_please());
console.log(dirtyMartini.excuse_my_french())