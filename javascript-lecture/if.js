// 조건문
// if (1) {
//   console.log("조건이 참이면 출력합니다.");
// }

// let score = 90;
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

//quiz
let height = 178;
let weight = 74;
let meterHeight = 180 / 100;

let bmi = weight / Math.pow(meterHeight, 2);
console.log(bmi);
// if(bmi >25){
//   console.log("비만")
// }else if(bmi > 23){
//   console.log("과체중")
// }else if(bmi >18.5){
//   console.log("정상")
// }else{
//   console.log("저체중")
// }

if (bmi > 25) {
  console.log("비만");
} else if (bmi > 18.5) {
  console.log("정상");
} else {
  console.log("저체중");
}
