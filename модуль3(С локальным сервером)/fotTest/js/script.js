'use strict';

const sliderWrapper = document.querySelector('.offer__slider-wrapper'),
      slides = document.querySelectorAll('.offer__slide'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current');
let slideIndex = 1,
    testVar = document.querySelector('.test-var');

// show

if (slides.length < 10) {
    total.textContent = `0${slideIndex}`;
} else {
    total.textContent = slides.length;
}
console.log(slides.length);
showSlides(slideIndex);

function showSlides(n){
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';

    if (slideIndex < 10){
        current.textContent = `0${slideIndex}`;
    } 
    else {
        current.textContent = slideIndex;
    }
}


const plusSlides = (n) => {
    showSlides(slideIndex = slideIndex + n);
};

prev.addEventListener('click', (e) =>{
    plusSlides(-1);
    testVar.textContent = slideIndex;
});

next.addEventListener('click', (e) => {
    plusSlides(1);
    testVar.textContent = slideIndex;
});