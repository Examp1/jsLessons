'use strict';

// запись данных

// localStorage.setItem('number', 5);

// //получаем данные

// console.log(localStorage.getItem('number'));

// // del

// // localStorage.removeItem('number');

// // полностью чистим 

// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');


checkbox.addEventListener('change', (e) => {
    localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('isChecked')){
    checkbox.checked = true;
}
if (localStorage.getItem('bg') === 'changed') {
    // localStorage.removeItem('bg');
    form.style.backgroundColor = 'red';
}

change.addEventListener('click', (e) => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'Denchik',
    age: 27
};
const serializePerson = JSON.stringify(person);

localStorage.setItem('user', serializePerson);

console.log(JSON.parse(localStorage.getItem('user')));