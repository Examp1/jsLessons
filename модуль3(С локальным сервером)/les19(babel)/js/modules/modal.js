function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show', 'fade');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function hideModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show', 'fade');
    document.body.style.overflow = '';
}
function modal(triggerSelector, modalSelector, modalTimerId) {
    //создаем модальное окно
    const modalBtn = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalBtn.forEach(item => {
        item.addEventListener('click', () => showModal(modalSelector, modalTimerId));
    });

    // закрытие вне модального окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            hideModal(modalSelector);
        }
    });
    // закрытие по esc 
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show', 'fade')) {
            hideModal(modalSelector);
        }
    });
    // модификация модалки
    // задача когда юзер долистал до конца страницы показать модалку или через некоторое время
    // если юзер пролистал до конца страницы показываем модалку


    let userScrolled = document.documentElement.scrollTo;

    function showModalByScroll() {
        const maxHeight = document.documentElement.scrollHeight;
        if (window.pageYOffset + document.documentElement.clientHeight >= maxHeight) {
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }


    window.addEventListener('scroll', showModalByScroll);
}

// module.exports = modal;
export default modal;
export {hideModal};
export {showModal};
