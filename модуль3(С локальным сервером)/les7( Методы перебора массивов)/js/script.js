'use strict';

// filter

// const names = ['alex', 'vlad', 'ivan', 'Kseniya'];
// // получаем все элементы которые меньше чем 5 символов

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map
// позволяет взять исходный масив и изменить его на выходе новый масив с изменениями

// let answers = ['Vlad', 'AnAn', 'Hello'];

// // const result = answers.map(item => item.toLocaleLowerCase());// 1й вариант записи лучше делать так 
// answers = answers.map(item => item.toUpperCase()); // 2й вариант записи но нужно делать переменную let

// // console.log(result);
// console.log(answers);

//every and some

// const arr = [4,'11','22'];

// console.log(arr.some(item => typeof(item) === 'number' )); // возвращяет тру если есть хоть 1 элемент удовлетворяет условие
// console.log(arr.every(item => typeof(item) === 'number' )); // возвращяет тру если все элементы удовлетвоярю условие


// reduce 
// нужен чтгобы схлопывать или собирать все в 1 масив

// const arr = [4, 6, 1, 3, 2, 5];

// const res = arr.reduce((sum, current) => { // sum = индекс current элемент тоесть первая итерация 0 + 4 вторая 4 + 5 итд..
//     return sum + current;
// });

// console.log(res);

// const arr2 = ['apple', 'pear', 'plum'];

// const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`); // после current можно добавить через запятую дефолт значние

// console.log(res2);

// задача 

const obj = {
    vlad: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};

const newArr = Object.entries(obj) // делаем с обьекта матрицу
.filter(item => item[1] === 'persone') // делаем фильтр для получения всех элементов с 2м значением person
.map(item => item[0]); // выводим только имена

console.log(newArr);