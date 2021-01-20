function reverseString(str) {
  var reverse = "";
  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  return reverse;
}
var statement = reverseString("hello how are you");
console.log(statement);
