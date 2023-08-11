console.log("hello js");
var num = 10;
var myAge = 28;
let myname = "정현목";
const pi = 3.14; // <- const는 상수 변하지 않는 수로 지정할때 사용한다.
let isMarried = -1; // <- boolean(true, false)
// false의 조건 0, undefined, null, "", NaN등등

let test = 100 / 0;
console.log(typeof test);

//block scope {}
//var 변수는 유효범위를 function
{
  var weight = 80;

  console.log("var=>" + weight);
}
console.log(weight); //<--원래는 weight가 출력이 안되지만 var는 가능하다.

// for (var i = 0; i < 100; i++) {
//   console.log(i);
// }
// console.log(i);
{
  let weight = 90;
  console.log("let=>" + weight);
}

myAge = myAge + 1;
console.log(myAge == 29);
console.log(myAge == "29");
console.log(myAge === "29");
console.log(myAge === 29);

if (test) {
  console.log("기혼");
} else {
  console.log("미혼");
}
