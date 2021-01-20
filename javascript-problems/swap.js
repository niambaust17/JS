let numberOne = 10;
let numberTwo = 20;
console.log(numberOne, numberTwo);

// swap with extra variable

/*let temp = numberOne;
numberOne = numberTwo;
numberTwo = temp;*/

// swap without extra variable

/*numberOne = numberOne + numberTwo; //one = 30
numberTwo = numberOne - numberTwo; //two =  30 - 20 = 10
numberOne = numberOne - numberTwo; //one = 30 - 10 = 20*/

// swap with js

[numberOne, numberTwo] = [numberTwo, numberOne];
console.log(numberOne, numberTwo);
