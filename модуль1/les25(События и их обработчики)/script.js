'use strict';

// 1й способ 
// oncliсk в атребут

// 2й способ
// проблемма этого способа если повторяем свойство то 2е заменяет первое
const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay');
// btn.onclick = function(){
//     alert('click');
// };
// удалить такой обработчик мы не сможем

// 3й способ

// btn.addEventListener('click', (e) => {
//     // console.log('hover');
//     console.log(e.target);
//     e.target.remove();
// });

// btn.addEventListener('click', () => {
//     alert('second click');
// });
let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1){
    //     btn.removeEventListener('click', deleteElement);
    // }

};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

// всплытие событий  - это когда событие срабатывает сначало на вложенном элементе а потом подымаеться по иерархии на верх по дом дереву

// отмена событий

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // отменяем событие

    console.log(event.target);
});
// одну и ту же функции навесить на разные теги

// нужно перебрать псевдомасив и навесить событие на все

// const btns = document.querySelectorAll('button');

// btns.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log(`click ${e.target}`);
//     });
// });

// опции событий 

    // once
    const btns = document.querySelectorAll('button');

    btns.forEach(item => {
        item.addEventListener('click', deleteElement, {once: true});
    });