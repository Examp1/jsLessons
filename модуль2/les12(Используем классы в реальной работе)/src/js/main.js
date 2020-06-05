'use strict';

document.addEventListener('DOMContentLoaded', () => {

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

    //создаем модальное окно

    const modalBtn = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = modal.querySelector('[data-close]');

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

    modalClose.addEventListener('click', hideModal);
    // закрытие вне модального окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
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
    //  таймер

    const deadline = '2020-06-11';

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
    new MenuCard(
        'img/tabs/vegy.jpg',
        'alt',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item',
        'big'
    ).render();

    new MenuCard(
        'img/tabs/elite.jpg',
        'alt',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        15,
        '.menu .container',
        // 'menu__item'
    ).render();

    new MenuCard(
        'img/tabs/post.jpg',
        'alt',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
        21,
        '.menu .container',
        'menu__item'
    ).render();

});