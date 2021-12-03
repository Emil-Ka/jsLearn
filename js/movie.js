const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

let i = 0;
do {
   let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
   let reviewFilm = +prompt("На сколько оцените его?", "");
   if (lastFilm != null && reviewFilm != null && lastFilm != '' && reviewFilm != '' && lastFilm.length <= 50) {
      personalMovieDB.movies[lastFilm] = reviewFilm;
      console.log("done");
      i++;
   }
   else {
      console.log("error");
   }
}
while (i < 2);

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

console.log(personalMovieDB);