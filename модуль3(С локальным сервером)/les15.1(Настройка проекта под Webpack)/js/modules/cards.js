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