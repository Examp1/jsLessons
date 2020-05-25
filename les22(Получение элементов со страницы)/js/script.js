'use strict';

const box = document.getElementById('box'); // по id 

console.log(box);

const btn = document.getElementsByTagName('button'); // по teg

console.log(btn);

const circle = document.getElementsByClassName('circle');

console.log(circle);

// новые методы 

const heart = document.querySelectorAll('.heart'); // получаем все 

console.log(heart);

heart.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // получаем первый 

console.log(oneHeart);