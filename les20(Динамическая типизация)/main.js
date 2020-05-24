"use strict";

// to string

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2 sposob

console.log(typeof(5 + ""));


const num = 5;

console.log("https://vk.com/catalog/" + num);
console.log(`https://vk.com/catalog/${num}`);

const fontSize = 26 + 'px';

// to number

// 1)

console.log(typeof(Number('4')));

// 2) унарный + 

console.log(typeof(+'5'));

// 3) 

console.log(typeof(parseInt('15px', 10)));

// реальный пример

const answer = +prompt('Hello', ''); // превращет с число

// to boolean


//всегда false 
// 0, '', null, undefined, NaN;  

// 1)

let switcher = null;

if (switcher) {
    console.log('working');
}

switcher = 1;

if (switcher) {
    console.log('working');
}

// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!"4444"));