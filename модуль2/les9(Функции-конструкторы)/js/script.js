'use strict';
// стандарт es5
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () { 
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
const vlad = new User('Vlad', 20);
console.log(ivan, '\n' ,vlad);

ivan.hello();
vlad.hello();
vlad.exit();
// в es6 используеться классы