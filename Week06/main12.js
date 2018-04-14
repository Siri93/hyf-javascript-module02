
//12.Create an empty object
var MyObject = {};


//13.function that takes two objects as parameters and compares them
var myobj1 = {
    color: "red",
    size: 10,
    props: {
      width: "200",
      height: "20",
    }
  }
  
  var myobj2 = {
    color: "red",
    size: "100",
    props: {
      width: "200",
      height: "20",
    }
  }
  
  compareObjects(myobj1, myobj2);
  
  function compareObjects(obj1, obj2){
      if(compareByValue(obj1, obj2)){
      console.log("Objects have same values");
    }else{
      console.log("Object dosn't have same values");
    }
    if(compareByType(obj1, obj2)){
      console.log("Objects have same elements values and types");
    }else{
      console.log("Object dosn't have same elements values and types");
    }
  }
  
  function compareByValue(obj1, obj2){
    for(var el in obj1){
      if(typeof obj1[el] == 'object'){
        if(!compareByValue(obj1[el], obj2[el])){
          return false;
        }
      }
      else if (obj1[el] == obj2[el]){
        continue;
      }else{
        return false;
      }
    }
    return true;
  }
  
  
  function compareByType(obj1, obj2){
    for(var el in obj1){
      if(typeof obj1[el] == 'object'){
        if(!compareByType(obj1[el], obj2[el])){
          return false;
        }
      }
      else if (obj1[el] === obj2[el]){
        continue;
      }else{
        return false;
      }
    }
    return true;
  }
