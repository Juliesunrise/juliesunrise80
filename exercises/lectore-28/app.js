/*Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.
Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.
Виконати базову перевірку:
ім’я користувача не може бути пустим,
електронна адреса має бути у правильному форматі,
пароль має містити принаймні 8 символів,
пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку.
 Повідомлення про помилки відображаються в розділі errorMessages.
Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.*/

document.querySelector('#registrationForm').addEventListener('submit',function (e) {
    let userName=document.querySelector('#username').value;
    let email=document.querySelector('#email').value;
    let password=document.querySelector('#password').value;
    let errorMessages=document.querySelector('#errorMessages');
    errorMessages.innerHTML='';

    if(userName===''){
        errorMessages.innerHTML+=`Заповніть поле ${userName}`
       alert ('Введіть ім\'я користувача')
    }
    let passwordValidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(!passwordValidate.test(password)){
        errorMessages.innerHTML+='Пароль введено невірно'
        console.log ('Пароль введено невірно')
    }

    let emailValidate=/^[a-zA-Z0-9._-]+@[a-zA-Z]{2,4}$/;
    if(!emailValidate.test(email)){
        errorMessages.innerHTML+='Email некоректний'
        alert('Email некоректний')
    }
    if(errorMessages!==''){
        e.preventDefault()
    }else{
        document.querySelector('#registrationForm').reset()
    }
})


