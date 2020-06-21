'use strict';

//  new RegExp('pattern', 'flags'); // старый синтакиси

// /pattern/flags  новый синтаксис

// const ans = prompt('Введите ваше имя ', '');

// const reg = /n/ig;

// класические флаги 
// i не зависимость от регистра
// g глобальный показывает все вхождения а не только первое  к search не юзается
// m многострочный

// console.log(ans.search(reg)); // ищем первую букву n

// console.log(ans.match(reg));

// replace принимает 2 аргумента то что мы меняем и то на что мы меняем

// const pass = prompt('Password', '');
// . = все элементы
// \экраинируем тоесть если сделать так \. то найдет точку
// console.log(pass.replace(/./g, '*'));
// console.log('12-24-56'.replace(/-/g, ':'));

// метод test проверяет на true/false строку которыю мы передаем

// const ans = prompt('Введите ваше число ', '');

// const reg = /\d/;
// классы
// \d ищем цифры
// \w ищем буквы
// \s ищем пробелы

// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i)); // ищем сначал букву потом цифру итд

console.log(str.match(/\D\S/g));
// обратные классы
// \D не чила
// \W не буквы
// \S не пробелы

// 

const input = document.querySelector('input'),
      btn = document.querySelector('button');

input.addEventListener('input', (e) => {
    const pass = input.value;
    input.value = input.value.replace(/./g, '☻');
    console.log('change');
    console.log(pass);
});

