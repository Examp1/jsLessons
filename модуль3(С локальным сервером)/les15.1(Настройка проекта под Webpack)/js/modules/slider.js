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