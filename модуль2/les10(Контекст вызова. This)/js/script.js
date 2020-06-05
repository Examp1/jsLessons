'use strict';

// контекст вызова 

// просто вызов функции 

// function showThis() {
//     console.log(this); // работае только с обычным кодом с строгим режимом undefind
//     function sum (a, b) {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());

// }

// showThis(4, 5);



// 1) обычная функция: this = window , но если стоит use strict = undefind

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout(); // undefind из-за того что вызов у нас идет из функции
//     }
// };

// obj.sum();
// 2) контекст у методов обьекта это будет сам обьект

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let Vlad = new User('vlad', 1);

// 3) в конструкторах и классах this - это новый экземпляр обьекта 

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'vald'
// };

// sayName.call(user, 'Smith'); // ставим для функции sayName контекст user
// // делают одно и тоже разница начианеться когда функция принимает носколько аргументов в call мы передем через , в apply через масив ['....']
// sayName.apply(user, ['Smith']);


// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); // в this для функции double мы передаем 2 
// console.log(double(3));
// console.log(double(13));

// 4) ручная привязка this (call, apply, bind)


// ПРАКТИКА

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});
// у стрелочной функции нет контекста вызова
const obj = { 
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();
// из-за того что у стрелочнйо функции say () нету контекста вызова оноа берет его у родителя а родитель это метод в обьекте у него контекст вызова это сам обьект

const double = a => a * 2; // если принимает 1 аргумент можно не стаивть круглые скобки и если тело функции занимает 1 строку то можно не делать фигурные скобки
    // return a * 2 ; // в классическо варианте
console.log(double(4));

// контекст вызова в обработчиках событий в стрелочной функции

btn.addEventListener('click', (e) => {
    this.style.backgroundColor = "red"; // контекста нет этот способ не рабочий 
    e.target.style.backgroundColor = "red"; // это работает
});