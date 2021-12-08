"use strict";

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      }
   },
   rememberLastMovie: function() {
      for (let i = 0; i < 2; i++) {
         let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
         let reviewFilm = +prompt("На сколько оцените его?", "");
         if (lastFilm != null && reviewFilm != null && lastFilm != '' && reviewFilm != '' && lastFilm.length <= 50) {
            personalMovieDB.movies[lastFilm] = reviewFilm;
            console.log("done");
         }
         else {
            console.log("error");
            i--;
         }
      }
   },
   detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
         console.log("Просмотрено довольно мало фильмов");
      } 
      else if (personalMovieDB.count < 30) {
         console.log("Вы классический зритель");
      }
      else if (personalMovieDB.count >= 30) {
         console.log("Вы киноман");
      }
      else {
         console.log("Произощла ошибка");
      }
   },
   toggleVissibleMyDB: function() {
      personalMovieDB.privat = !personalMovieDB.privat;
   },
   showMyDB: function() {
      if (!personalMovieDB.privat) {
         console.log(personalMovieDB);
      }
      else {
         console.log("Доступ закрыт!");
      }
   },
   writeYourGenres: function() {
      for (let i = 1; i < 2; i++) {
         let genre = prompt(`Введите фильмы через запятую`).toLowerCase();
         
         if (genre === "", genre == null) {
            i--;
         }
         else {
            personalMovieDB.genres = genre.split(", ");
            personalMovieDB.genres.sort();
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Жанр под номером ${i + 1} - это ${item}`);
      });
   }
};

personalMovieDB.writeYourGenres();