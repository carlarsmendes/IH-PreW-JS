


// Starts Here!!!


// Here I am creating the rover object, with direction as key and N as default value. To add additional properties, add extra ones with a comma inbetween
//
// Definir coordenada inicial/mínima como sendo  x,y -> 1,1
// travelLog em String,  só guardando Movimentos validados

let rover = {
  direction: "N",
  x: 1,
  y: 1,
  travelLog: "",
  obstacles: [[1,2],[4,5],[3,9]]
  };
 
 
// The Iteration 2, Turning the Rover Left and Right
// 
// }

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
      case "N": rover.direction="E";
      break;
      case "S": rover.direction="W";
      break;
      case "E": rover.direction="S";
      break;
      case "W": rover.direction="N";
      break;
      default: console.log("no direction was selected");
    } 
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
      case "N": rover.direction="W";
      break;
      case "S": rover.direction="E";
      break;
      case "E": rover.direction="N";
      break;
      case "W": rover.direction="W";
      break;
      default: console.log("no direction was selected");  
      } 

}

// The Iteration 3, moving the Rover Forward and Backwards


function moveForward(rover){
    console.log("moveForward was called!");
   // (x,y) inicial (1,1)  canto baixo, esquerdo ?
MarsMaxX= 10;
MarsMaxY= 10;  
    switch (rover.direction){
      case "N": rover.y=Math.min(rover.y+1,MarsMaxY);
      break;
      case "S": rover.y=Math.max(rover.y-1,1);
      break;
      case "E": rover.x=Math.Min(rover.x+1,MarsMaxX);
      break;
      case "W": rover.x=Math.Max(rover.x-1,1);
      break;
      default: console.log("no direction was selected");
    } 
  }

function moveBackwards(rover){
    console.log("Backwards was called!");
   // (x,y) inicial (1,1)  canto baixo, esquerdo ?
MarsMaxX= 10;
MarsMaxY= 10;   
    switch (rover.direction){
      case "S": rover.y=Math.min(rover.y+1,MarsMaxY);
      break;
      case "N": rover.y=Math.max(rover.y-1,1);
      break;
      case "W": rover.x=Math.Min(rover.x+1,MarsMaxX);
      break;
      case "E": rover.x=Math.Max(rover.x-1,1);
      break;
      default: console.log("no direction was selected");
    } 
  }

// Using Loops to test the moveFormward and moveBackwards functions

for (i=1;i<6;i++)  {moveForward(rover);}
console.log("The location is "+rover.x+" , "+rover.y);
for (i=1;i<6;i++)  {moveBackwards(rover);}
console.log("The location is "+rover.x+" , "+rover.y);
  


  //  Iteration 4 | Commands
  //var commandList="frfrlb";   
var commandList="fffbrr";
commandReceiver(commandList);

function commandReceiver(commandList){
   for (i=0 ; i < commandList.length ; i++){
     switch (commandList[i]){
      case "f": moveForward(rover);
      break;
      case "b": moveBackwards(rover);
      break;
      case "l": turnLeft(rover);
      break;
      case "r": turnRight(rover);
      break;
      default: console.log(commandList[i]+" - was a not valid rover command");
    } 
   }
}


 //  Iteration 5 | Commands, Tracking

  //  This should create a property and define it as a string
rover.travelLog = "";


//   Here to change the property so that it adds to the travelLog property--------

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
      case "N": rover.direction="E";rover.travelLog += "r" ; 
      break;
      case "S": rover.direction="W";rover.travelLog += "r" ; 
      break;
      case "E": rover.direction="S";rover.travelLog += "r" ; 
      break;
      case "W": rover.direction="N";rover.travelLog += "r" ; 
      break;
      default: console.log("no direction was selected");
    } 
   // -------- Questions about these--------------
    //rover.travelLog.push([rover.x,rover.y
      //rover.travelLog.push(["r"]);
      //rover.travelLog += "r" ;                     
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
      case "N": rover.direction="W";rover.travelLog += "l" ; 
      break;
      case "S": rover.direction="E";rover.travelLog += "l" ; 
      break;
      case "E": rover.direction="N";rover.travelLog += "l" ; 
      break;
      case "W": rover.direction="W";rover.travelLog += "l" ; 
      break;
      default: console.log("no direction was selected");  
      } 
      //rover.travelLog.push([rover.x,rover.y]);
      //rover.travelLog.push([rover.x,rover.y]);
      //rover.travelLog += "l" ;                     

}

function commandReceiver(commandList){
  //console.log( commandList.length  ); 

for ( var i=0 ; i < commandList.length ; i++){
  //console.log("switch (commandList[i])" );    
  switch (commandList[i]){
     case "f": moveForward(rover);
     break;
     case "b": moveBackwards(rover);
     break;
     case "l": turnLeft(rover);
     break;
     case "r": turnRight(rover);
     break;
     default: console.log(commandList[i]+" - was a not valid rover command");
   }
  //console.log(rover); 
  //console.log( "I=" +i  ); 
}
}
