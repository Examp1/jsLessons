/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cards() {
// классы

class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...clases) { // даю рест оператор ибо хз сколько будет параметров после основных
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.clases = clases;
        this.transfer = 27;
        this.parent = document.querySelector(parentSelector);
        this.changeToUAH();
    }

    changeToUAH() {
        this.price = this.price * this.transfer;
    }

    render() {
        const element = document.createElement('div');
        if (this.clases.length === 0) {
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.clases.forEach(className => element.classList.add(className)); // делаю выборку всех элементов и даю им класы которые я получаю из рест опреатора 
        }
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                `;
        this.parent.append(element);
    }
}

// const div = new MenuCard()
// div.render();
// можно сделать вот так 

// делаем функции которая принимает значения карточек с сервера

const getResourses = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Coul not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

getResourses('http://localhost:3000/menu')
    // обычный способ
    // .then(data => {
    //     data.forEach(obj => {
    //         new MenuCard(obj.img, obj.altimg, obj.title, obj.descr, obj.price).render();
    //     });
    // });
    // деструкторизация
    .then(data => {
        data.forEach(({
            img,
            altimg,
            title,
            descr,
            price
        }) => { // делаем это для того чтобы не писать obj. и название свойства
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });

// 2й способ  получение данных с сервера и формирование на лету
//  getResourses('http://localhost:3000/menu')
//  .then(data => createCard(data));

//  function createCard(data) {
//     data.forEach(({img, altimg, title, descr, price}) => {
//         const element = document.createElement('div');
//         price = price * 27;
//         element.classList.add('menu__item');
//         element.innerHTML = `
//         <img src=${img} alt=${altimg}>
//         <h3 class="menu__item-subtitle">${title}</h3>
//         <div class="menu__item-descr">${descr}</div>
//         <div class="menu__item-divider"></div>
//         <div class="menu__item-price">
//             <div class="menu__item-cost">Цена:</div>
//             <div class="menu__item-total"><span>${price}</span> грн/день</div>
//         `;

//         document.querySelector('.menu .container').append(element);
//     });
//  }
}

module.exports = cards;

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
// отправка формы 

const forms = document.querySelectorAll('form');

const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
};

forms.forEach(item => {
    bindPostData(item);
});

const postData = async (url, data) => { // asynk означает что внутри ф-ции будет асинхронный код
    const res = await fetch(url, { // асинк и авейт всегда в паре авейт ставим на те операции которые мы должны дождатся 
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};


function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        // const object = {};
        // formData.forEach(function (value, key) {
        //     object[key] = value;
        // });

        const json = JSON.stringify(Object.fromEntries(formData.entries()));


        postData('http://localhost:3000/requests', json)
            // .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
    });
}

function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.remove('show');
    prevModalDialog.classList.add('hide');
    showModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
        </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        hideModal();
    }, 4000);
}


// fetch('http://localhost:3000/menu')
// .then(data => data.json())
// .then(res => console.log(res));

}

module.exports = form;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
//создаем модальное окно

const modalBtn = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal');

modalBtn.forEach(item => {
item.addEventListener('click', showModal);
});

function showModal() {
modal.classList.add('show', 'fade');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden';
clearInterval(modalTimerId);
}

function hideModal() {
modal.classList.add('hide');
modal.classList.remove('show', 'fade');
document.body.style.overflow = '';
}

// закрытие вне модального окна
modal.addEventListener('click', (e) => {
if (e.target === modal || e.target.getAttribute('data-close') == '') {
    hideModal();
}
});
// закрытие по esc 
document.addEventListener('keydown', (e) => {
if (e.code === 'Escape' && modal.classList.contains('show', 'fade')) {
    hideModal();
}
});
// модификация модалки
// задача когда юзер долистал до конца страницы показать модалку или через некоторое время
const modalTimerId = setTimeout(showModal, 500000);
// если юзер пролистал до конца страницы показываем модалку


let userScrolled = document.documentElement.scrollTo;

function showModalByScroll() {
const maxHeight = document.documentElement.scrollHeight;
if (window.pageYOffset + document.documentElement.clientHeight >= maxHeight) {
    showModal();
    window.removeEventListener('scroll', showModalByScroll);
}
}


window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
//  слайдер вариант 1

const slides = document.querySelectorAll('.offer__slide'),
prev = document.querySelector('.offer__slider-prev'),
next = document.querySelector('.offer__slider-next'),
total = document.querySelector('#total'),
current = document.querySelector('#current'),
//   2й вариант
slidesWrapper = document.querySelector('.offer__slider-wrapper'),
slidesFild = document.querySelector('.offer__slider-inner'),
slidesWidth = window.getComputedStyle(slidesWrapper).width;


let slideIndex = 1,
slideOffset = 0;

// showSlides(slideIndex);

// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
// } else {
//     total.textContent = `${slides.length}`;
// }

// function showSlides(n) {
//     if (n > slides.length) { // проверяем граничные значения
//         slideIndex = 1;
//     }

//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     slides.forEach(slide => slide.style.display = 'none');

//     slides[slideIndex - 1].style.display = 'block'; // тут мы берем все слайдеры и обращяемся через [] к первому слайду в масиве 

//     if (slides.length < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = `${slideIndex}`;
//     }
// }

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// prev.addEventListener('click', (e) => {
//     plusSlides(-1);
// });
// next.addEventListener('click', (e) => {
//     plusSlides(1);
// });

//  слайдер вариант 2
slidesFild.style.width = 100 * slides.length + '%';
slidesFild.style.display = 'flex';
slidesFild.style.transition = '.5s all';

slidesWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
slide.style.width = slidesWidth;
});
if (slides.length < 10) {
total.textContent = `0${slides.length}`;
current.textContent = `0${slideIndex}`;
} else {
total.textContent = `${slides.length}`;
current.textContent = slideIndex;
}

function deleteNotDigits(str) {
return +str.replace(/\D/g, '');
}

console.log(slidesWidth);
next.addEventListener('click', (e) => {
if (slideOffset == deleteNotDigits(slidesWidth) * (slides.length - 1)) {
    slideOffset = 0;
} else {
    slideOffset += deleteNotDigits(slidesWidth);
}

slidesFild.style.transform = `translateX(-${slideOffset}px)`;
if (slideIndex == slides.length) {
    slideIndex = 1;
} else {
    slideIndex++;
}
getZeroSlide();

dotActive();
});
console.log(slidesWidth.replace(/\D/g, ''));

prev.addEventListener('click', (e) => {
if (slideOffset == 0) {
    slideOffset = +deleteNotDigits(slidesWidth) * (slides.length - 1);
} else {
    slideOffset -= deleteNotDigits(slidesWidth);
}

slidesFild.style.transform = `translateX(-${slideOffset}px)`;
if (slideIndex == 1) {
    slideIndex = slides.length;
} else {
    slideIndex--;
}

getZeroSlide();

dotActive();
});

// навигация слайдера
const slider = document.querySelector('.offer__slider'),
indicators = document.createElement('ol'),
dots = [];

slider.style.position = 'relative';
indicators.classList.add('carousel-indicators');

slider.append(indicators);
for (let i = 0; i < slides.length; i++) {
const dot = document.createElement('li');
dot.setAttribute('data-slide-to', i + 1);
dot.classList.add('dot');
indicators.append(dot);
if (i == 0) {
    dot.style.opacity = 1;
}
dots.push(dot);
}
console.log(dots);

const dotActive = () => {
dots.forEach(dot => dot.style.opacity = '.5');
dots[slideIndex - 1].style.opacity = 1;
};
const getZeroSlide = () => {
if (slides.length < 10) {
    current.textContent = `0${slideIndex}`;
} else {
    current.textContent = slideIndex;
}
};

dots.forEach(dot => {
dot.addEventListener('click', (e) => {
    const slideTo = e.target.getAttribute('data-slide-to');

    slideIndex = slideTo;
    slideOffset = deleteNotDigits(slidesWidth) * (slideTo - 1);

    slidesFild.style.transform = `translateX(-${slideOffset}px)`;

    getZeroSlide();

    dotActive();

});
});
}

module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParrent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();
    tabsParrent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {

     //  таймер

     const deadline = '2020-06-15';

     function getTimeRemaining(endtime) {
         const t = Date.parse(endtime) - Date.parse(new Date()),
             days = Math.floor(t / (1000 * 60 * 60 * 24)),
             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
             minutes = Math.floor((t / 1000 / 60) % 60),
             seconds = Math.floor((t / 1000) % 60);
 
         return {
             'total': t,
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
         };
     }
 
     function getZero(num) {
         if (num >= 0 && num < 10) {
             return `0${num}`;
         } else {
             return num;
         }
     }
 
     function setClock(selector, endtime) {
         const timer = document.querySelector(selector),
             days = timer.querySelector('#days'),
             hours = timer.querySelector('#hours'),
             minutes = timer.querySelector('#minutes'),
             seconds = timer.querySelector('#seconds'),
             timeInterval = setInterval(updateClock, 1000);
 
         updateClock(); // фикс мигания 
 
         function updateClock() {
             const t = getTimeRemaining(endtime);
 
             days.innerHTML = getZero(t.days);
             hours.innerHTML = getZero(t.hours);
             minutes.innerHTML = getZero(t.minutes);
             seconds.innerHTML = getZero(t.seconds);
 
             if (t.total <= 0) {
                 clearInterval(timeInterval);
             }
         }
     }
 
     setClock('.timer', deadline);
 
     
}

module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', () => {
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
    const modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
    const timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
    const card = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
    const forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
    const slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
    const calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");

    tabs();
    modal();
    timer();
    card();
    forms();
    slider();
    calc();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map