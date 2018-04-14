//7- Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
var vehicle = ["motorbike", "caravan", "bike", "car"];

//8- How do you get the third element from that list?
var name = vehicle[2];

//9- Change the function vehicle to use the list of question 4. So that vehicle("green", 3, 1) prints "a green new caravan".
var age = {1 : "totally new", 2 : "old", 3 : "new", 4 : "almost used", 5 : "used"};

function vehicleModel(color, vehicleType, vehicleAge){
    return "a " + color + " " + age[vehicleAge] + " " + vehicle[vehicleType];
}
console.log(vehicleModel("green", 1, 3));
