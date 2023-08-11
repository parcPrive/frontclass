//while, for
let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}
console.log("끝");

// let sum = 0;
// for (let j = 1; j < 100; j++) {
//   if (j % 3 === 0) {
//     sum += j;
//   }
// }
// console.log(sum);

for (let j = 2; j < 10; j++) {
  for (let g = 1; g < 10; g++) {
    console.log(`${j} X ${g} = ${j * g} `);
  }
}
