const fixOver = () => {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visability = 'hidden';
    div.style.overflowY = 'scroll';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;

};
export default fixOver;