/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
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
          deleteLi = movieList.querySelectorAll('.delete'),
          listItem = movieList.querySelectorAll('li'),
          form = document.querySelector('form.add'),
          checkbox = form.querySelector('[type="checkbox"'),
          addInput = form.querySelector('.adding__input'),
          submitForm = form.querySelector('button');

    
   
    //4
    const makeChenges = () =>{
        ganre.textContent = 'Драма';
        bg.style.background = 'url("img/bg.jpg") center/cover no-repeat';
    }; 
    
          
    const sortArr = (arr) =>{
        arr.sort();
    };
  
    // submit
   form.addEventListener('submit', (e) => {
    e.preventDefault();

    let newFilm = addInput.value; 
    const favorite = checkbox.checked;

    if(favorite){
        console.log('Добавляем любимый фильм');
    }

    if (newFilm) { // если newFilm = "" тоесть false тогда ничего не будет если true то выполняеться все что в if 
        
        if (newFilm.length > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
        }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, movieList);
        e.target.reset(); 
    }
   });

   function createMovieList (films, parrent) {
    sortArr(films);
    parrent.innerHTML = '';
    films.forEach((film, i) =>{
        parrent.innerHTML +=`
        <li class="promo__interactive-item">${i + 1}) ${film}
            <div class="delete"></div>
        </li>
        `;
    });
    
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            btn.parentElement.remove();
            // console.log(i);
            // console.log(films);
            movieDB.movies.splice(i, 1);
            createMovieList(films, parrent);
        });
    });

   }
   // function
   const deleteAdv = (arr) => {
    arr.forEach(item =>{
        item.remove();
    });
   };


   createMovieList(movieDB.movies, movieList);
   makeChenges();
   deleteAdv(banners);
});