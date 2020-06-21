import {hideModal, showModal} from './modal';
import {postData} from '../services/services';

function form(formSelectro ,modalTimerId) {
// отправка формы 

const forms = document.querySelectorAll(formSelectro);

const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
};

forms.forEach(item => {
    bindPostData(item);
});



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
    showModal('.modal', modalTimerId);

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
        hideModal('.modal');
    }, 4000);
}


// fetch('http://localhost:3000/menu')
// .then(data => data.json())
// .then(res => console.log(res));

}

// module.exports = form;
export default form;