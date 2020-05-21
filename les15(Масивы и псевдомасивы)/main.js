"use strict";

const arr = [1, 2, 3, 4, 5];
// arr[99] = 0;
// console.log(arr.length);
arr.sort();
arr.sort(compareNum);

console.log(arr);

function compareNum (a, b) { // функция для sort чтобы сортировать не только строки а и числа
    return a - b;
}

// arr.pop(); // удалить конечное значение
// arr.push(10); // добавить в конец значение

// console.log(arr);
// перебор обычным циклом
// for (let i = 0; i < arr.length; i++) { 
//     console.log(arr[i]);
// }
// //  перебор циклом for of работает только с масивоподобным сущностями
// for (let value of arr) {
//     console.log(value);
// }
//  перебор foreach  
arr.forEach(function (item, i, arr) { 
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");

const product = str.split(", ");

product.sort(); // сортировака по алфавиту  (сортирует только строки)

console.log(product.join('; ')); // join получаем с масива строку

// у псевдомасивом нет никаки методов