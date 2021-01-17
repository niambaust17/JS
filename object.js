var student = { id: 17, name: "Niam", phone: 175 }
var student2 = { id: 15, name: "Emu", phone: 234 }

console.log(student);

// access specific property 3 types

var id = student.id;

var name = student["name"];

var propertyName = "phone"
var mobileNo = student[propertyName];

console.log(id);
console.log(name);
console.log(mobileNo);

// update property

student2.phone = 34567;

student2["phone"] = 5678;

student2[propertyName] = 81234;
console.log(student2);

// add new property

student2.song = "sadher lau";

student2["play"] = "ludu";

console.log(student2);