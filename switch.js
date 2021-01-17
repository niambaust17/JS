var number = 25;
switch (number) {
    case 100:
        console.log('Value 100');
        break;
    case 50:
        console.log('Value 50')
        break;
    case 30:
    case 25:
        console.log("Value 30 or 25")
        break;
    default:
        console.log(`Sorry, we are out of ${number}.`);
}