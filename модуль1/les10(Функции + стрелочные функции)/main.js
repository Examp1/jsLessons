"use strict";

function showFirstMassage (text) {
    console.log(text);
    let num = 20;

}

showFirstMassage("hello World");


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(2, 2));

function ret() {
    let num = 50;
    return num;
}

let anotNum = ret();
console.log(anotNum);


const logger = function() {
    console.log('hello');
};

logger();

const calc = (a, b) => { return a + b };
// const calc = (a, b) => a + b;
// const calc = b => b;