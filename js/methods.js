const obj = {
   name: "john",
   age: 16,
   city: "London",
   colors: {
      border: "red",
      bg: "white"
   }
};

for (let key in obj) {
   if (typeof obj[key] === "object") {
      for (let i in obj[key]) {
         console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
      }
   }
   else {
      console.log(`Свойство ${key} имеет значение ${obj[key]}`);
   }  
}

const {border, bg} = obj.colors;
console.log(border, bg);

let long = Object.keys(obj);
console.log(long);
console.log(long.length);

const arr = {
   makeTest: function(name) {
      console.log(`Привет, ${name}`);
   }
};

arr.makeTest("Эмиль");