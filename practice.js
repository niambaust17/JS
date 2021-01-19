var inch = 300;
var feet = inch / 12;
console.log(feet);

function unitConverter(inch) {
  return inch / 12;
}

var mrinal = unitConverter(120);
var emu = unitConverter(300);
console.log(mrinal, emu);
// --------------------------------------------------------------------------------- //
let year = 2032;

if (year % 2 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("Leap Year");
    } else {
      console.log("Not Leap Year");
    }
  } else {
    console.log("Leap Year");
  }
} else {
  console.log("Not Leap Year");
}

function leapYear(year) {
  if (year % 2 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        // console.log("Leap Year");
        return true;
      } else {
        // console.log("Not Leap Year");
        return false;
      }
    } else {
      //   console.log("Leap Year");
      return true;
    }
  } else {
    //   console.log("Not Leap Year");
    return false;
  }
}

let year16 = leapYear(1700);
console.log(year16);
// leapYear(2021);
// leapYear(1971);
// leapYear(1700);
// ---------------------------------------------------------------------------------//

// factorial with for loop

let fact = 1;
for (let i = 1; i <= 20; i++) {
  fact *= i;
}
console.log(fact);

function factorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
}

var fact5 = factorial(5);
var fact10 = factorial(10);
var fact4 = factorial(4);
var fact8 = factorial(8);
console.log(fact4, fact5, fact8, fact10);

// factorial with while loop

function factorial(number) {
  if (number >= 0) {
    let fact = 1;
    let i = 1;
    while (i <= number) {
      fact *= i;
      i++;
    }
    return fact;
  } else {
    return false;
  }
}

var fact5 = factorial(10);
console.log(fact5);

// factorial recursive

function factorial(number) {
  if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

var fact15 = factorial(10);
console.log(fact15);

// fibonacci series

/*let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
}
console.log(fibo);*/

/*function fibonacci(number) {
  let fibo = [0, 1];
  for (let i = 2; i <= number; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }
  return fibo;
}

var item15 = fibonacci(15);
var item10 = fibonacci(10);
console.log(item10, item15);*/

// fibonacci recursive specific position item

function fibonacci(number) {
  if (number == 0) {
    return 0;
  }
  if (number == 1) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

var item15 = fibonacci(15);
console.log(item15);

// fibonacci recursive full series

function fibonacciSeries(number) {
  if (number == 0) {
    return [0];
  } else if (number == 1) {
    return [0, 1];
  } else {
    let fibo = fibonacciSeries(number - 1);
    let nextItem = fibo[number - 1] + fibo[number - 2];
    fibo.push(nextItem);
    return fibo;
  }
}

var item15 = fibonacciSeries(15);
console.log(item15);

// prime number or not

function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}
var result = isPrime(0);
console.log(result);
