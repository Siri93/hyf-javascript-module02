//Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage,
var vehicle = ["motorbike", "caravan", "bike", "car"];
for (var i in vehicle ){
    console.log("Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.");
}

//11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 7?

var vehicle = ["motorbike", "caravan", "bike", "car"];
vehicle.bus = "bus";
for (var i in vehicle ){
    console.log("Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.");
}
