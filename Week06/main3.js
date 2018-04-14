var myObject = {
    color: "blue",
    sort: "bag",
    size: "medium",
    metrial: "leather",
  };
  
         
  function myFunction(object){
      for(var type in object){
      console.log(type + " " + object[type]);
    }
  
  }
  
  myFunction(myObject);
  
