'use strict';

// AJAX

//1й вариант ajax не особо актуален

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', (e) => {
    const request = new XMLHttpRequest();

    request.open('GET', 'current.json'); // метод гет / пост , путь , асинхронный или не асинхронный, логин, пароль
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // способ через readystatechange нужен когда нужно узнавать какой respons отдает серверв
    // request.addEventListener('readystatechange', () => { // отслеживает состояния запроса в данный момент
    //     if (request.readyState === 4 && request.status === 200) {// done
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         console.log(request.response);
    //         inputUsd.value = "Что-то пошло не так";
    //     }
    // });
    //  делаем проверку только по статусу 200 , 404 итд..
    request.addEventListener('load', () => { // отслеживает состояния запроса в данный момент
        if (request.status === 200) {// done
            // console.log(request.response);
            const data = JSON.parse(request.response);
            if (typeof(data) == 'number') {
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
                inputRub.reset();
            }
        } else {
            console.log(request.response);
            inputUsd.value = "Что-то пошло не так";
        }
    });
    
    // status показывает статус 404 402 403 итд..
    // statusText текстовое описание статуса
    // respons получаем ответ от сервера 
    // readyState содержит текущее состояния
});
