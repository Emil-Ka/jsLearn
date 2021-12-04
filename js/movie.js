let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberLastMovie() {
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
}

rememberLastMovie();

function detectPersonalLevel() {
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
}

detectPersonalLevel();

function showMyDB() {
   if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
   }
   else {
      console.log("Доступ закрыт!");
   }
}

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый фильм под номером ${i}: `); 
   }
}

writeYourGenres();
showMyDB();

