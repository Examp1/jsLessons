'use strict';

const person = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Ira',
        dad: 'Slavik'
    }
};
// мы отдаем на JSON на сервер

// console.log(JSON.stringify(person));

//с сервера приходит JSON 

// console.log(JSON.parse(JSON.stringify(person)));

// гулбокие копии 

const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = 'Ann';

console.log(person);
console.log(clone);