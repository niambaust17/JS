let fruitPrice = [25, 47, 20, 88, 33, 99];
let max = fruitPrice[0];
for (let i = 0; i < fruitPrice.length; i++) {
  if (max < fruitPrice[i]) {
    max = fruitPrice[i];
  }
}
console.log(max);
