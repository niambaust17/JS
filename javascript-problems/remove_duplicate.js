var friendNames = ["abul", "babul", "chotu", "babul", "kabir", "chotu"];
var uniqueNames = [];
for (let i = 0; i < friendNames.length; i++) {
  var index = uniqueNames.indexOf(friendNames[i]);
  if (index == -1) {
    uniqueNames.push(friendNames[i]);
  }
}
console.log(uniqueNames);
