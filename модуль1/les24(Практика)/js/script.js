/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +-

2) Изменить жанр фильма, поменять "комедия" на "драма" +

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS +

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const banners = document.querySelectorAll('.promo__adv img'),
      bg = document.querySelector('.promo__bg'),
      ganre = bg.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      listItem = movieList.querySelectorAll('li');

//1
banners.forEach(item =>{
    item.remove();
});
//2
ganre.textContent = 'Драма';
//3
bg.style.background = 'url("img/bg.jpg") center/cover no-repeat';
//4
// list.append(movieDB.movies);

// movieDB.movies.forEach(i => {
//     list.innerHTML('<li>i</li>');
// });
movieList.innerHTML = '';

movieDB.movies.sort();

// console.log(bg.innerHTML); // получаем елемнт со страницы

movieDB.movies.forEach((film, i) =>{
    movieList.innerHTML +=`
    <li class="promo__interactive-item">${i + 1}) ${film}
        <div class="delete"></div>
    </li>
    `;
});

// a = a + 1 // a += 1