let num = 90;

do {
   console.log(num);
   num++;
}
while (num < 100);

for (let i = 0; i < 10; i++) {
   if (i % 2 === 1) {
      continue;
   }
   console.log(i);
}