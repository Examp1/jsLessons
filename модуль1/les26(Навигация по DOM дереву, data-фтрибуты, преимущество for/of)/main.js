'use strict';

// console.log(document.body); // body
// console.log(document.documentElement); // html
// 
// console.log(document.body.childNodes); // получаем всех детей тега body (псевдомасив)
// первый ребенок 
// console.log(document.body.firstChild); // первый
// console.log(document.body.lastChild); // последний 
// получаем родителей , соседей и детей

console.log(document.querySelector('#current').parentNode.parentNode); // получаем обертку родителя 
console.log(document.querySelector('#current').parentNode); // получаем родителя 
// data-атрибуты

console.log(document.querySelector('[data-current="3"]').nextSibling); // получаем след элемент
console.log(document.querySelector('[data-current="3"]').previousSibling); // получаем предыдущий элемент
// nextSibling и previousSibling помимо элементов могут получать и переносы строки как в примерах выше

// nextElementSibling и previousElementSibling могут получать только элементы переносы строки они не получают
console.log(document.querySelector('[data-current="3"]').nextElementSibling); // получаем след элемент
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
// также работает и с parentNode просто вместо parentNode пишем parentElement
console.log(document.querySelector('#current').parentElement);
// c lastChild и firstChild все также 
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
console.log('%c%s', 'color: red; font-size: 50px', "-----------------------------------");
// перебор в псевдоколекции
// задача перебрать все ноды и избавиться от текстовых нод
for (let node of document.body.childNodes) {
    if (node.nodeName == "#text"){
        continue;
    }

    console.log(node);
}