var friendsAge = [15, 18, 22, 24, 25, 17];
console.log(friendsAge);
console.log(friendsAge.length);
console.log(friendsAge[0]);
console.log(friendsAge[4]);

var arifAge = friendsAge[5];
console.log(arifAge);
friendsAge[3] = 26;
console.log(friendsAge);
var position = friendsAge.indexOf(22);
console.log(position)
var position = friendsAge.indexOf(27);
console.log(position)

// add and remove from last
friendsAge.push(19);
console.log(friendsAge);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);

// add and remove from first
friendsAge.unshift(30);
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);

// array slice

var teaLine = ["abir", "kabir", "mofis", "jamal", "ramij"];
var part = teaLine.slice(2,5);
console.log(teaLine);
console.log(part);

