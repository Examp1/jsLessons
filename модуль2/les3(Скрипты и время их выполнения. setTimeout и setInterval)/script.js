'use strict';

// const timerId = setTimeout(function(text){
//     console.log('hello');
// }, 2000);

// const timerId = setTimeout(function(text){
//     console.log(text);
// }, 2000, 'hello');

// const timerId = setTimeout(logger, 2000);



// //  cброс таймаута
// clearInterval(timerId);

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// btn.addEventListener('click', (e) => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 200);
// });

function logger () {
    console.log('hello');
    i++;
    if (i === 3) {
        clearInterval(timerId);
    }
}

// рекурсивнй вызов setTimeout 

// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 500);
// },500);

function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);