// Undefined
console.log(age);
var age = 10;
// 10
console.log(age);

sayHi();

function sayHi() {
  console.log('Hi');
  console.log(add(10, 12));
}
function add(a, b) {
  return a + b;
}
