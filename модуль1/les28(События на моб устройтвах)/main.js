"use strict";

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcansel


document.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.targetTouches);
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
    box.addEventListener('touchmove', (e) => {
        console.log(e.targetTouches[0].pageX);
    });
});
// свойства ивента e.
// touches список пальцев 
// targetTouches
// chengedTouches
