function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    //  слайдер вариант 1

    const slides = document.querySelectorAll(slide),
            slider = document.querySelector(container),
            prev = document.querySelector(nextArrow),
            next = document.querySelector(prevArrow),
            total = document.querySelector(totalCounter),
            current = document.querySelector(currentCounter),
            //   2й вариант
            slidesWrapper = document.querySelector(wrapper),
            slidesFild = document.querySelector(field),
            slidesWidth = window.getComputedStyle(slidesWrapper).width;


    let slideIndex = 1,
        slideOffset = 0;
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
    const indicators = document.createElement('ol'),
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

// module.exports = slider;
export default slider;