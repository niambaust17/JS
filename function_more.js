/*function doubleOddAll(allElement)
{
    for (let i = 0; i < allElement.length; i++)
    {
        const element = allElement[i];
        if (element % 2 == 0)
        {
            console.log(element, ' is even');
        }
        else
        {
            console.log(element * 2);
        }
    }
}*/
numbers = [2, 4, 6, 1, 3, 5];
// doubleOddAll(numbers);
friendsAge = [10, 21, 22, 33, 34, 35];
// doubleOddAll(friendsAge);

function doubleOdd(num)
{
    var result;
    if (num % 2 == 0)
    {
        result = num;
    }
    else
    {
        result = num * 2;
    }
    return result;
}
function doubleOddAll(allElement)
{
    var final = [];
    for (let i = 0; i < allElement.length; i++)
    {
        const element = allElement[i];
        var makeFinal = doubleOdd(element);
        final.push(makeFinal)
    }
    return final;
}

var finalResult = doubleOddAll([10, 21, 22, 33, 34, 35]);
console.log(finalResult);