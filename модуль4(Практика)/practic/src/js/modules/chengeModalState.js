import checkNumInput from './checkNumInput';
const chengeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');
    checkNumInput('#height');
    checkNumInput('#width');

    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, (e) => {
                // узнаем на какой элемент мы кликнули/изменили/что-то ввели
               switch(item.nodeName){ 
                case 'SPAN':
                    state[prop] = i;
                break;
                case 'INPUT':
                    if (item.getAttribute('type') === 'checkbox') {
                        i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                        elem.forEach((box, j) => {
                            // убиаем чекед у всех чекбоксов
                            box.checked = false;
                            // ставим чекед тому чекбоксу у который совпадает с индексом
                            if (i == j) {
                                box.checked = true;
                            }
                        });
                    } else {
                        state[prop] = item.value;
                    }
                break;
                case 'SELECT': 
                    state[prop] = item.value;
                break;
               }
                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default chengeModalState;