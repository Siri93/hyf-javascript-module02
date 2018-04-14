//Create a function named vehicleType that receives 
//a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2)

let code = { 1 : 'car', 2 : 'motorbike'};
function vehicleType(color, vehicleCode) {
    return 'a ' + color + ' '+ code[vehicleCode];
}
console.log(vehicleType('blue', 2));
