const btn = document.getElementById("btn");
console.log(btn);

const p = document.getElementsByClassName("title");
console.log(p);

const items = document.getElementsByTagName("li");
console.log(items[1]);

const i = document.querySelectorAll(".ol");
i.forEach((item, i) => {
   console.log(item);
});

const first = document.querySelector("li");
console.log(first);