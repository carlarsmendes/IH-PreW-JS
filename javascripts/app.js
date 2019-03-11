
// Starts Here!!!


// Here I am creating the rover object, with direction as key and N as default value. To add additional properties, add extra ones with a comma inbetween
//
// Definir coordenada inicial/mínima como sendo  x,y -> 0,0 ( porque index começa sempre por 0)
// travelLog em String,  só guardando Movimentos validados
// estes são os valores iniciais de todas as propriedades
// obstacles representa 3 objetos cada um com coordenadas fixas.

const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: "",
  obstacles: [[1,2],[4,5],[3,9]]
  };
 
 
// The Iteration 2, Turning the Rover Left and Right
// 
// }

function turnRight(rover){ //esta função vai depender do lado para qual o rover está virado.
  console.log("turnRight was called!");
  rover.travelLog += "r" ;
  switch (rover.direction){
      case "N": rover.direction="E";
      document.getElementById("roverHtml").style.transform = "rotate(+90deg)";
      break;
      case "S": rover.direction="W";
      document.getElementById("roverHtml").style.transform = "rotate(-90deg)";
      break;
      case "E": rover.direction="S";
      document.getElementById("roverHtml").style.transform = "rotate(180deg)";
      break;
      case "W": rover.direction="N";
      document.getElementById("roverHtml").style.transform = "rotate(0deg)";
      break;
      default: console.log("no direction was selected");
    } 
}

      //rover.travelLog.push([rover.x,rover.y]);
      //rover.travelLog.push([rover.x,rover.y]);
      //rover.travelLog += "l" ;                     


function turnLeft(rover){
  rover.travelLog += "l";
  // console.log("turnLeft was called!"); (for debugging)
  // alert("turnLeft was called!"); (for debugging)
  switch (rover.direction){
      case "N":  rover.direction="W";
      document.getElementById("roverHtml").style.transform = "rotate(-90deg)";
      break;
      case "S": rover.direction="E";
      document.getElementById("roverHtml").style.transform = "rotate(90deg)";
      break;
      case "E": rover.direction="N";
      document.getElementById("roverHtml").style.transform = "rotate(0deg)";
      break;
      case "W": rover.direction="S";
      document.getElementById("roverHtml").style.transform = "rotate(180deg)";
      break;
      default: console.log("no valid direction was selected");  
      } 

}

// The Iteration 3, moving the Rover Forward and Backwards


function moveForward(rover){
    // console.log("moveForward was called!");
   // (x,y) inicial (1,1)  canto baixo, esquerdo ?
MarsMaxX= 9;
MarsMinX=0;
MarsMaxY= 9;  
MarsMinY=0;
rover.travelLog += "f";

function moveY (){
  let measureY = 4*rover.y ;
  return `${measureY}vw`};

  function moveX (){
    let measureX = 4*rover.x ;
    return `${measureX}vw`};

    switch (rover.direction){
      case "N": rover.y=Math.max(rover.y-1,MarsMinY);
      document.getElementById("roverHtml").style.top = moveY();
      break;
      case "S": rover.y=Math.min(rover.y+1,MarsMaxY);
      document.getElementById("roverHtml").style.top = moveY();
      break;
      case "E": rover.x=Math.min(rover.x+1,MarsMaxX);
      document.getElementById("roverHtml").style.left = moveX ();
      break;
      case "W": rover.x=Math.max(rover.x-1,MarsMinX);
      document.getElementById("roverHtml").style.left = moveX ();
      break;
      default: console.log("no valid direction was selected");
    } 
  }

function moveBackwards(rover){
    // console.log("Backwards was called!");
    //aqui usando a função Max e Min indica que 9 será sempre o número máximo de X e de Y, e nunca será retornado nenhum número maior que esse. se for maximo nao vai mover, e se não vai mover na direcção de y ou x dependendo de para onde estiver virado inicialmenteMarsMaxX= 9;
MarsMaxX= 9;
MarsMinX=0;
MarsMaxY= 9;  
MarsMinY=0;
rover.travelLog += "b";


function moveY (){
  let measureY = 4*rover.y ;
  return `${measureY}vw`};

  function moveX (){
    let measureX = 4*rover.x ;
    return `${measureX}vw`};


    switch (rover.direction){
      case "S": rover.y=Math.max(rover.y-1,MarsMinY); //aqui mesmo que já esteja no extremo da matriz (y=8) nunca será mais do que 9, portanto a condição está aqui. Mas tmb poderia er criado um "if"
      document.getElementById("roverHtml").style.top = moveY();
      break;
      case "N": rover.y=Math.min(rover.y+1,MarsMaxY);
      document.getElementById("roverHtml").style.top = moveY();
      break;
      case "W": rover.x=Math.min(rover.x+1,MarsMaxX);
      document.getElementById("roverHtml").style.left = moveX ();
      break;
      case "E": rover.x=Math.max(rover.x-1,0);
      document.getElementById("roverHtml").style.left = moveX ();
      break;
      default: console.log("no valid direction was selected");
    } 
  }

// Using For Loops to test the moveFormward and moveBackwards functions

// for (i=1;i<6;i++)  {moveForward(rover);}
// console.log("The location is "+rover.x+" , "+rover.y);
// for (i=1;i<6;i++)  {moveBackwards(rover);}
// console.log("The location is "+rover.x+" , "+rover.y);
  

  //  Iteration 4 | Commands
  //var commandList="frfrlb";   
// var commandList="fffbrr"; //this should be made into an input box actioned by a button
// commandReceiver(commandList);

// function commandReceiver(commandList){
//    for (i=0 ; i < commandList.length ; i++){
//      switch (commandList[i]){
//       case "f": moveForward(rover);
//       break;
//       case "b": moveBackwards(rover);
//       break;
//       case "l": turnLeft(rover);
//       break;
//       case "r": turnRight(rover);
//       break;
//       default: alert(`"${commandList[i]}" was a not valid rover command`);
//     } 
//    }
// }

 //  Iteration 5 | Commands, Tracking

  //  This should create a property and define it as a string
// rover.travelLog = ""; -> Já foi incuído no objeto




   // -------- Questions about these--------------
    //rover.travelLog.push([rover.x,rover.y
      //rover.travelLog.push(["r"]);
      //rover.travelLog += "r" ;                     

      function showTravelLog(rover){
        return alert(`FYI - Your Travel Log has recorded the following instructions:
${rover.travelLog}`);
      }


     

// function commandReceiver(commandList){
//   //console.log( commandList.length  ); 
  
//   // var commandList = prompt("Please enter your commands",`Use "r" or "l" for rotating right or left and "b" or "f" for backwards or forward`);

// for ( var i=0 ; i < commandList.length ; i++){
//   //console.log("switch (commandList[i])" );    
//   switch (commandList[i]){
//      case "f": moveForward(rover);
//      break;
//      case "b": moveBackwards(rover);
//      break;
//      case "l": turnLeft(rover);
//      break;
//      case "r": turnRight(rover);
//      break;
//      default: alert(`"${commandList[i]}" was a not valid rover command`);
//    }
  //console.log(rover); 
  //console.log( "I=" +i  ); 





  //Interacting with the DOM - Turning Left and Right

const roverHtml = document.getElementById("roverHtml");
const btnLeft =  document.getElementById("turnLeft");
const btnRight =  document.getElementById("turnRight");
const btndirectionStatus = document.getElementById("currentPosition");
const btnTravelLog = document.getElementById("travelLog");
// const btnCommandReceiver = document.getElementById("commandReceiver");



btnLeft.addEventListener('click', function(){turnLeft(rover)});
btnRight.addEventListener('click', function(){turnRight(rover)});

btnTravelLog.addEventListener('click', function(){showTravelLog(rover)});

// btnCommandReceiver.addEventListener('click', function(){commandReceiver(commandList)});


 //Interacting with the DOM - Moving Forwards and Backwards 

const btnForwards = document.getElementById("moveForward");
btnForwards.addEventListener('click', function(){moveForward(rover)});

const btnBackwards = document.getElementById("moveBackwards");
btnBackwards.addEventListener('click', function(){moveBackwards(rover)});




                 
// function changePosition() {
// document.getElementById("activePosition").innerHTML = `"${rover.direction}"` 
// Your rover's position is ${rover.x},${rover.y}`}

// btnAnswers.addEventListener('click', changePosition);

document.getElementById("activePosition").innerHTML = `"${rover.direction}"`;

