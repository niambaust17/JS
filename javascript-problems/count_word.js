let speech = "I               am a good boy and i am also a web developer";
var count = 0;
for (let i = 0; i < speech.length; i++) {
  if (speech[i] == " " && speech[i - 1] != " ") {
    count += 1;
  }
}
count++;
console.log(count);
