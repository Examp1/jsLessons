'use strict';
// promise

console.log('Запрос данных...');

// setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//         name: 'Tv',
//         price: 2000
//     };

//     setTimeout(() => {
//         product.status = "ordered";
//         console.log(product);
//     }, 2000);
// }, 2000);
// пример promise

// const req = new Promise((resolve, reject) => { // resolve что-то выполнилось правильно, reject обещание не выполнилось
//     console.log('Подготовка данных...');

//     const product = {
//         name: 'Tv',
//         price: 2000
//     };

//     resolve(product); // передаем данные чтобы их юзать в не этого обьекта
// });

// req.then((product) => { // обрабатываем resolve на строчке 29 и по оканчанию 41 стр продолжаем цепочку обработки
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Данные получены');
//             product.status = "ordered";
//             resolve(product);

//         }, 2000);
//     });
// }).then(data => { // прододжаем обработку
//     data.modify = true;
//     return data;
//     // console.log(data);
// }).then((data) => {
//     console.log(data);
// }).catch(() => { // действие при ошибки (else в условии) обычно всегда с низу пишут
//     console.error('Произошла ошибка');
// }).finally(() => { // блок finally если есть то он всешда в конце и выполняется в любом случаи будь то resolve(успех) или reject(провал) 
//     console.log('Finally');
// });

// методы промиво all и

const time = time => {
    return new Promise(resolve =>{
        setTimeout (() => resolve(), time);
    });
};

// time(1000).then(() =>console.log('1000ms'));
// time(2000).then(() =>console.log('2000ms'));

// Promise.all  он ждет выполнение всех промисов и потом что-то выполняет 
// Promise.all([time(1000), time(2000)]).then(() => {
//     console.log('All');
// });

//Promise.rece выполняет свои действия когда первый промис уже выполнился

Promise.race([time(1000), time(2000)]).then(() => {
    console.log('All');
});