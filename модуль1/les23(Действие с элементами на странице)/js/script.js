'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      heart = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// изменяем стили

// console.dir(box);

box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[1].style.backgroundColor = 'red'; // для второй кнопки даем стили

circles[0].style.backgroundColor = 'red';

let num = '500px';

box.style.cssText = `background-color: green; height: 500px; width: ${num}`;

// перебор

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

//2й способ перебора удобный

heart.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // сохраняет только в js в html его нет

// const text = document.createTextNode('тут был я'); // используеться редко

//  добавление классов

// className устаревшее свойство

div.classList.add('black');
// современные методы вставки c js в html созданых тегов на страницу

// document.body.append(div); //новый способ

// document.querySelector('.wrapper').append(div);

wrapper.append(div); // prepend до append после

// heart[0].after(div); // бифор и афтер также как препенд и апенд



// document.body.appendChild(div); //старый способ

// удаление со страницы 

// circles[0].remove(); 

// replace with
 
// heart[0].replaceWith(circles[0]); // замена 


// устаревшие конструкиции

// wrapper.appendChild(div);

// произвольное формирование страницы

// wrapper.insertBefore(div, heart[1]); // помещаем в враппер див перед 2м сердечком

// старый remove

// wrapper.removeChild(heart[1]);

// старый replaceWith

// wrapper.replaceChild(circles[0], heart[0]);

// добавляем текст или html код в теги

div.innerHTML = '<h1>hello world</h1>'; 

//  2й вариант

// div.textContent = 'hello'; // работает только с текстом  нужно для всяких модалок 

// вставка куска кода перед или после какого-то кода

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');  // 4 свойства afterbegin afterend beforebegin beforeend

// получаем тег не только через document
// пример

const test = document.querySelector('.wrapper'),
        testChild = test.querySelectorAll('.heart');
console.log(testChild);