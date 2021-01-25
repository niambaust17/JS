function callBack(name, age, task)
{
    console.log("My name :", name);
    console.log("My age :", age);
    task();
}

function washHand()
{
    console.log("Wash hand with soap.");
}
function takeShower()
{
    console.log("Take a shower.");
}

callBack("Mahin", 18, washHand);
callBack("Jalil", 17, takeShower);