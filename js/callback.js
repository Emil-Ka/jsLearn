function learnJS(lang, callback) {
   console.log(`I learn ${lang}`);
   callback();
}

function done() {
   console.log("good job!");
}

learnJS("Java", done);
