// 배열(나열)은 순서가 없는 것들에게 순서를 매기는것
let myClass = ["메밀", "탕수육", "떡볶이"];
console.log(myClass[0] === "메밀");
console.log(myClass[1] === "탕수육");
console.log(myClass[2] === "떡볶이");

const current = new Date();
const dd = current.getDay();
const ddArr = ["일", "월", "화", "수", "목", "금", "토"];
ddArr.push("일"); //뒤로 넣을때
ddArr.unshift("토"); //앞으로 넣을떄 하지만 좋은 방법은 아니다.
console.log(current);
console.log(ddArr[dd]);

for (let i = 0; i < ddArr.length; i++) {
  console.log(ddArr[i]);
}

let num01 = [1, 2, 3];
let num02 = num01;
console.log(num01, num02);
let animals = ["cat", "puppy", "bear", "lion"];
let copyAnimals = [...animals];
console.log(animals === copyAnimals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
// 배열 메소드에
animals.forEach(function (el, idx) {
  console.log(el, idx);
});

console.log(...animals);
