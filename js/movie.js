const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i = 0; i < 2; i++) {
   let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
   let reviewFilm = +prompt("На сколько оцените его?", "");
   personalMovieDB.movies[lastFilm] = reviewFilm;
}

console.log(personalMovieDB);