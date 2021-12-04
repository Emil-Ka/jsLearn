function calc(a, b) {
   return (a + b);
}

const sum = function(a, b) {
   return a + b;
};

const logger = (a, b) => {
   if (a > b) {
      return a;
   }
   else {
      return b;
   }
};

console.log(sum(3, 90));
console.log(calc(2, 8));
console.log(logger(34, 78));