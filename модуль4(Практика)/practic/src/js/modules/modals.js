import fixOver from './fixOverflow';
const modals = () => {
    function bindModal(trigerSelector, modalSelector, closeSelectror, closeClickOverlay = true) {
        const triger = document.querySelectorAll(trigerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelectror),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = fixOver();
        triger.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            windows.forEach(item => {
                item.style.display = 'none';
                document.body.style.marginRight = `0px`;
            });
        });

        modal.addEventListener('click', (e) => {
            const tar = e.target;
            if (tar === modal && closeClickOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
                windows.forEach(item => {
                    item.style.display = 'none';
                    document.body.style.marginRight = `0px`;
                });
            }
        });
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    // setTimeout(function () {
    //     document.querySelector('.popup').style.display = 'block';
    // }, 60000);
};
export default modals;