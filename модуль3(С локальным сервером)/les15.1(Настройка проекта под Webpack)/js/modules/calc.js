function calc() {
// калькулятор
const result = document.querySelector('.calculating__result span');
let sex = 'female',
    height, weight, age,
    ratio = '1.375';

if (localStorage.getItem('sex')){
    sex = localStorage.getItem('sex');
} else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
}

if (localStorage.getItem('ratio')){
    ratio = localStorage.getItem('ratio');
} else {
    ratio = '1.375';
    localStorage.setItem('ratio', '1.375');
}
    // установка классов в нужные блоки с локалстореджа
    function  initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.remove(activeClass);
            if (el.getAttribute('id') === localStorage.getItem('sex')) {
                el.classList.add(activeClass);
            }

            if (el.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                el.classList.add(activeClass);
            }
        });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    calcTotal();
function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
        result.textContent = '____';
        return; // прерываем функцию при false
    }
    if (sex == 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}


function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.addEventListener('click', (e) => {
            const target = e.target;
            if (target.getAttribute('data-ratio')) {
                ratio = +target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +target.getAttribute('data-ratio'));
            } else {
                sex = target.getAttribute('id');
                localStorage.setItem('sex', target.getAttribute('id'));

            }
            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });

            target.classList.add(activeClass);
            console.log(ratio, sex);
            calcTotal();
           
        });
    });
}

getStaticInformation('#gender div', 'calculating__choose-item_active');
getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

function getDinamicInformation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', (e) => {

        if (input.value.match(/\D/g)){
            input.style.border = '1px solid red';
        } else {
            input.style.border = 'none';
        }

        switch (input.getAttribute('id')) {
            case 'height':
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
            case 'age':
                age = +input.value;
                break;
        }
        calcTotal();
    });
}
getDinamicInformation('#height');
getDinamicInformation('#weight');
getDinamicInformation('#age');



}

module.exports = calc;
