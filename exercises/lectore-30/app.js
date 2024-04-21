//У файлі index.html є форма з 2-ма полями. Написати асинхронну функцію, що чекає 10 секунд, поки користувач заповнює поля форми.
// Після чого функція читає значення полів форми, зберігає їх у змінних firstName і lastName та перевіряє чи вони не пусті.
// Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You. Якщо хоча б одне зі значень заповнене,
// функція змінює контент h1 на Hello firstName lastName!
function checkForm(){
    let fName=document.querySelector('input[name="firstName"]').value;
    let lName=document.querySelector('input[name="lastName"]').value;
    if(fName==='' && lName===''){
        document.querySelector('#waiting').textContent='I\'m miss You'
    }else {
        document.querySelector('#waiting').textContent = `Hello ${fName} ${lName}`
    }
}

setTimeout(checkForm,10000)

//Завдання 2:Створити новий об'єкт xhr, як екземпляр XMLHttpRequest.
// Надіслати запит на веб-сервер https://jsonplaceholder.typicode.com/posts, використовуючи методи open() і send().
// Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує результат запиту з сервера,
// за допомогою JSON.parse перетворює результат на об'єкт, будує за допомогою шаблона template стрічку публікацій
// та поміщає отриманий результат всередину елемента з id="demo".
const template = (item) =>
    `<h3>${item.title}</h3>
     <div>${item.body}</div>
`;

/*function renderPosts(posts){
    console.log(posts)


    /*posts.map(function (post){
    const {body,title}= post;

    }*/

let xhr=new XMLHttpRequest();
xhr.open(
    'GET',
    'https://jsonplaceholder.typicode.com/posts',
    true
)

xhr.onload=function(){
const posts=JSON.parse(xhr.responseText);
    posts.map(function (post) {
const {body, title}=post;
        console.log(body);
        const item=document.querySelector('#demo');
        const h3=document.createElement('h3');
        const div=document.createElement('div');
        h3.innerText=title;
        div.innerText=body;
        item.appendChild(h3);
        item.appendChild(div);
    })

}

xhr.send()