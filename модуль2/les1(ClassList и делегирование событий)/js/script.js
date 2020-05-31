'use strict';

const btns = document.querySelectorAll('button'),
     wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1)); // получаем клсс по индексу
// console.log(btns[1].classList.add('red', 'tttttt')); // добавляем класс
// console.log(btns[0].classList.remove('blue')); // удаляем класс
// console.log(btns[0].classList.toggle('blue')); // тоглит класс

// if (btns[1].classList.contains('red')) { // проверяет есть ли класс
//     console.log('red');
// } else {
//     console.log('nah');
// }

btns[0].addEventListener('click', (event) => {
    // if (!btns[1].classList.contains('red')) { // проверяем что у 2й кнопки нету класса ред
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red'); 
});

// className устарело не успользовать

// console.log(btns[0].className);


// ДЕЛЕГИРОВАНИЕ

wrapper.addEventListener('click', (event) => {
    console.dir(event.target);
    // if (event.target && event.target.tagName == 'BUTTON') { // делегирование по названию тегу
    //     console.log('hello');
    // }
    if (event.target && event.target.classList.contains("blue")) { // делегирование по названию класса
        console.log('hello');
    }
});

const elem = document.createElement('button');
elem.classList.add('blue');
wrapper.addEventListener('click', (e) => {
    wrapper.append(elem);
});
//  ПРОДВИНУТОЕ ДЕЛЕГИРОВАНИЕ
// if (event.target && event.target.matches('button.red')) // по тегу батон и класу ред у батона 
