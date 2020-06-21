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