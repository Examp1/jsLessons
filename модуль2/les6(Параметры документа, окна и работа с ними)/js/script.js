'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button'),
      text = document.querySelector('.text');
// const width = box.clientWidth;
// const height = box.clientHeight;

// console.log(width, height);

// clientWidth/Height  получаем высоту или ширину не учитываю бордеры марджины и скролбар 
// offsetWidth/height получаем учитывая марджины бордер и скрол

// const width = box.offsetWidth;
// const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

btn.addEventListener('click', (e) => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
    text.textContent = box.scrollTop;
});

// scrollTop / Left

//  получаем координаты элемента
// text.innerContent = box.getBoundingClientRect();

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

// document 
console.log(document.documentElement.scrollTop);

window.scrollBy(0, 400);