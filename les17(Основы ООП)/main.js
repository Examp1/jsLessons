"use strict";

let str = "some",
    strObj = new String(str);

// console.log(typeof(str)); // string
// console.log(typeof(strObj)); // object
// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("hello");
    }
};

// const jhon = {
//     health: 100,

// };


// устарвеший формат
// jhon.__proto__ = soldier; // soldier родительский обьект jhon наследует его свойства и методы такие как armor 

// новый формат
// если jhon уже существовал
// Object.setPrototypeOf(jhon, soldier); // устанавливаем для параметра 1 родительский обьект параметр 2

//  создаем обьект jhon который прототипно наследуеться от soldier
const jhon = Object.create(soldier); 
 
console.log(jhon); //чтобы использовать методы или свойства родителя нужно их указывать пример jhon.armor

console.log(jhon.armor); // вызываем свойство обьекта
jhon.sayHello(); // вызываем метод обьекта

