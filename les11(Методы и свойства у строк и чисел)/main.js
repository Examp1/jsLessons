"use strict";

const str = "test 123",
    arr = [1, 2, 3, 4];

console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// console.dir(Number);

let fruit = "some fruit";

console.log(fruit.indexOf('q'));

const logg = "hello world";

console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 11));

const num = 12.2,
      test = "12.2px";

console.log(Math.round(num));

console.log(parseInt(test));
console.log(parseFloat(test));