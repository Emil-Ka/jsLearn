const array = [19, 90, 23, 41, 53, 76, 9];
console.log(array.sort());

function compareNum(a, b) {
   return a - b;
}

console.log(array.sort(compareNum));