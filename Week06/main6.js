//Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5)
// prints "a blue used car"

var code = {1 : "car", 2 : "motorbike"};
var age = {1 : "totally new", 2 : "new", 3 : "old", 4 : "almost used", 5 : "used"};

function vehicle(color, vehicleCode, vehicleAge){
    return "a " + color + " " + age[vehicleAge] + " " + code[vehicleCode];
}
console.log(vehicle("blue", 1, 2));
