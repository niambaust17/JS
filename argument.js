function addNumbers(num1, num2)
{
    // arguments are array like object
    let sum = 0;
    for (let i = 0; i < arguments.length; i++)
    {
        const element = arguments[i];
        sum = sum + element;
    }
    // console.log(arguments[2]);
    return sum;
}
var result = addNumbers(2, 4, 5, 6, 10, 20, 30);
console.log(result);