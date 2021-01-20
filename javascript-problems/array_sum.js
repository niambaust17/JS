// let markHasin = [70, 55, 79, 100, 64];
// let sum = 0;
// for (let i = 0; i < markHasin.length; i++) {
//   sum = sum + markHasin[i];
// }
// console.log(sum);

function getArrayForSum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }
  return sum;
}

var markHero = getArrayForSum([10, 20, 30, 50]);
console.log(markHero);
var markHero1 = getArrayForSum([50, 60, 70]);
console.log(markHero1);
var markHero2 = getArrayForSum([100, 200, 300, 500]);
console.log(markHero2);
