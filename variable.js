var studentId = 170101017;
var completeBsc = 2021;
var studentName = "Niam Md. Affan";
var studentDepartment = "CSE";
var isMarried = false;
var isAlcoholic = false;
console.log(studentId);
console.log(studentName);
console.log(isMarried);
console.log(completeBsc);
console.log(studentDepartment);
console.log(isAlcoholic);

// variable type find out
console.log(typeof completeBsc);
console.log(typeof studentDepartment);
console.log(typeof isAlcoholic);

// string case change and findout index of specific word or split longer string
console.log(studentName.toLowerCase());
console.log(studentName.toUpperCase());
console.log(studentName.indexOf('an'));
console.log(studentName.indexOf('An'));
console.log(studentName.split(' '));

// type conversion
var numberOne = 15;
var numberTwo = 25.45;
var numberThree = "17";
var numberFour = "17.71";
console.log(parseInt(numberOne + numberTwo));
console.log(parseFloat(numberOne + numberTwo));
console.log(parseInt(numberThree));
console.log(typeof parseInt(numberThree));
// string to int/float +(string) or parseInt/parseFloat
console.log(typeof +(numberFour));
console.log(+(numberThree) + +(numberFour));

var numberFive = 0.1;
var numberSix = 0.2;
var total = numberFive + numberSix;
console.log(total.toFixed(3));

var date = new Date();
console.log(date);
var date = new Date("1971-12-16");
console.log(date);