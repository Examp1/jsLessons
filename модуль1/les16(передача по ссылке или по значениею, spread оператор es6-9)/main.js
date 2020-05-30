"use stict";

// let a = 5,
//     b = a;


// b = b + 5;

// console.log(b);
// console.log(a);


// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // ссылка 

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// создание копии обьекта

function copy (mainObj) {
    let objCopy = {};
     
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
} //поверхностная копия вложености имеют ссылочный тип данных

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};


const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// способ копирование 2

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

// копия масива

const oldArr = ['a', 'b', 'c'];

const newArr = oldArr.slice();

newArr[1] = "ssssss";

console.log(newArr);
console.log(oldArr);

// оператор разворота spreat

const video = ['youtube', 'vimeo', 'rutube'],
      blog = ['wordpress', 'livejurnal', 'blogger'],
      internet = [...video, ...blog, 'vk', 'fb'];
console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5 , 7];

log(...num); 

//  создание копий 4 вариант

const array = ['a', 'b'];

const newArray = [...array];

console.log(newArray);

const q = { 
    one: 1,
    two: 2
};

const newQ = {...q};

console.log(newQ);