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
        data.forEach(({img, altimg, title, descr, price}) => { // делаем это для того чтобы не писать obj. и название свойства
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
        const res = await fetch(url, {  // асинк и авейт всегда в паре авейт ставим на те операции которые мы должны дождатся 
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


    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));
});


