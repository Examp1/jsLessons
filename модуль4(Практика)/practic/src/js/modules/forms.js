import checkNumInput from './checkNumInput';
const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  
    checkNumInput('input[name="user_phone"]');
    // вызываем проверку на цифры модуль checkNumInputs;
    const message = {
        lodaing: 'Загрузка',
        seccess: 'Спасибо скоро с вами свяжутся',
        failure: 'Что-то пошло не так'
    };

    // делам функцию отправки запроса + асинк авейт
    const postDate = async (url, data) => {
        document.querySelector('.status').textContent = message.lodaing;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };
    // очистка инпутов
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            // отключаем дефолт событие
            e.preventDefault();
            // создаем элементы чтобы выводить в него текст статуса
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            // делаем формдату и в нее передаем форму которую мы перебираем
            const formDate = new FormData(item);
            // если у нас есть форма с атрибутом data-calc="end"
            if (item.getAttribute('data-calc') == 'end') {
                // достаем все ключи из обьекта state
                for (let key in state){
                    // добавляем ключ key и значение state[key] в формдату а ниже вся обработка и отправка
                    formDate.append(key, state[key]);
                }
            }
            // запрос fetch 13 строка
            postDate('./assets/server.php', formDate)
                .then(response => {
                    console.log(response);
                    statusMessage.textContent = message.seccess;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};
export default forms;