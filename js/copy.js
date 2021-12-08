const obj = {
   a: 4,
   b: 5,
   c: {
      x: 11,
      y: 90
   }
};

function copy(object) {
   const newObject = {};
   for (let i in object) {
      newObject[i] = object[i];
   }
   return newObject;
}

const n = copy(obj);
n.a = 23;
console.log(n);
console.log(obj);

const object = {
   a: 3,
   b: 6
};

const newObject = {
   x: 56,
   y:67
};

const q = Object.assign(object, newObject);

console.log(q);

const video = ["youtube", "vimeo"];
const blog = ["vk", "facebook", "twitter"];

const internet = [...video, ...blog];
console.log(internet);