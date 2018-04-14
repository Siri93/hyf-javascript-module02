var ten = 10;

if(ten == 10){
  console.log("condition is true");
}else{
  console.log("condition is false");
}

// make it in one line. (condition ? true statment : false statment)

console.log((ten == 10 ? "condition is true" : "condition is false"));


var age = 40;

var status = (age >= 60 ? "Too old" : (age >= 45 ? "old" : "Still young"));

console.log(status);
