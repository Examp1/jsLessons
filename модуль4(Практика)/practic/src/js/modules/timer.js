const timer = (id, deadline) => {
    // техническая ф-ция для добавления 0
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {
        // получаем разницу в мс между текущей датой и дедлайном
        const t = Date.parse(endtime) - Date.parse(new Date()),
              seconds = Math.floor((t / 1000) % 60), // получаем секунды из мс
              minutes = Math.floor((t / 1000 / 60) % 60),// получаем минуты
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };
    
    // ф-ция запускающяя таймер в нее передаем сам блок таймера и дедлайн
    const setClock = (selector, endtime) => {
        //обьявляем переменные
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timreInterval = setInterval(updateClock, 1000);
        // вызываем апдейт чтобы устранить баг с показыванием статики
        updateClock();
        function updateClock() {
            // в t  записываем сколько нам осталось до дедлайна
            const t = getTimeRemaining(endtime);
            //в блоки минут секунд итд выведоим их значения 
            // так как мы вернули из getTimeRemaining обьект юзаем его 
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            // проверка на дедлайн
            if (t.total <= 0){
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            
                clearInterval(timreInterval);
            }
        }
    };
    // запуск таймера
    setClock(id, deadline);
};
export default timer;