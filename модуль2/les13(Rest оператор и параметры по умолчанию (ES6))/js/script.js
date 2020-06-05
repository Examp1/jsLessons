'use strict';

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage');

// параметры по умолчанию
function calcOrDouble(number, basis = 3) {
    console.log(number * basis);
}
calcOrDouble(3);


// в уроке 12 реализация