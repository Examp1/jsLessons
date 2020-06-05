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

    function showTabContent(i = 0){
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();
    tabsParrent.addEventListener('click', (e) => {
        const target = e.target;
        if ( target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if ( target == item ){
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
        item.addEventListener('click', (e) => {
            modal.classList.add('show', 'fade');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function hideModal() {
        modal.classList.add('hide');
        modal.classList.remove('show', 'fade');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', hideModal);
    // закрытие вне модального окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal){
            hideModal();
        }
    });
    // закрытие по esc 
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show', 'fade')){
            hideModal();
        }
    });
});