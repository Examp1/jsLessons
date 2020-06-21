'use strict';
// конструктор
// function User(name, age){
//     this.name = name;
//     // this.age = age;
//     // делаем переменную privat
//     let userAge = age;

//     this.say = function() {
//         console.log(`Username: ${this.name}, age: ${userAge}`);
//     };

//     this.getAge = function () {
//         return userAge;
//     };

//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('error age');
//         }
//     };
// }

// const ivan = new User('Ivan', '28');

// console.log(ivan.name);
// console.log(ivan.userAge);
// console.log(ivan.getAge());

// ivan.setAge(30);
// // ivan.setAge(31);
// console.log(ivan.getAge());

// ivan.say();
// ===== КЛАСС ======
class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    say() {
        console.log(`Username: ${this.name}, age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('error age');
        }
    }
}

const vlad = new User('Vlad', '20');
console.log(vlad.age);
vlad.age = 99;
console.log(vlad.age);
vlad.say();

// ============ ПРИЕМ МОДУЛЬ ==============
