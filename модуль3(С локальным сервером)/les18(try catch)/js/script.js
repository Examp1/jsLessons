'use strict';

// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('result');
// } catch(e) { // e обьект ошибки
//     console.log('Error');
//     console.log(e);
//     // console.log(e.name);
//     // console.log(e.message);
//     // console.log(e.stack);
// } finally {
//     console.log('finaly');
// }


// console.log(a);
// console.log('still normal');
console.log('start script');

try { 
    document.querySelector('button').addEventListener('click', (e) => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}

try {
    document.querySelector('p').style.color = 'red';
} catch(e) {
    console.log(e);
}



console.log('end script');