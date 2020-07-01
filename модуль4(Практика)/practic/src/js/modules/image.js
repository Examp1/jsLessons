import fixOver from './fixOverflow';
const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img'),
          scroll = fixOver();

    imgPopup.classList.add('popup');

    workSection.appendChild(imgPopup);
    imgPopup.style.cssText = 'display: none; justify-content: center; align-items: center;';
    bigImg.style.maxWidth = '100%';
    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }
        if (target && target.matches('div')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }
    });
};
export default images;