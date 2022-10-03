const container = document.querySelector("#container");
const slider = document.querySelector("#slider");
const text = document.querySelector("#text");
let ammount = slider.value*slider.value;
let height = (500/slider.value)+"px";
let width = (500/slider.value)+"px";

 for (let i=1; i<=ammount; i++){
    const divs = document.createElement("div");
    divs.classList.add("squares");
    divs.style.height = height;
    divs.style.width = width;
    divs.style.backgroundColor = "greenyellow";
    container.appendChild(divs);
  }

const clear = document.querySelector("#clear");
const fill = document.querySelector("#fill");
const eraser = document.querySelector("#eraser");
let squares = document.querySelectorAll(".squares");
const colorMode = document.querySelector("#colorMode")
const rainbow = document.querySelector("#rainbow");
let palette = document.querySelector("#palette");
let buttonDown = 0;
let mousedown = 0;
toggleFunction();

slider.oninput = function(){
  text.textContent = slider.value+"x"+slider.value;
  
   for (let i=1; i<=ammount; i++){
    const element = document.querySelector(".squares");
    element.remove();
  }

  ammount = slider.value*slider.value;
  height = (500/slider.value)+"px";
  width = (500/slider.value)+"px";
  

  for (let i=1; i<=ammount; i++){
    const divs = document.createElement("div");
    divs.classList.add("squares");
    divs.style.height = height;
    divs.style.width = width;
    divs.style.backgroundColor = "greenyellow";
    container.appendChild(divs);
  }
  squares = document.querySelectorAll(".squares");
}

clear.addEventListener("click", function(){
  squares.forEach(function(e){
    e.style.backgroundColor = "greenyellow";
  });
});

fill.addEventListener("click",function(){
  squares.forEach(function(e){
    e.style.backgroundColor = palette.value;
  });
});

colorMode.addEventListener("click", function(){
  buttonDown = 0;
  toggleFunction();
});

eraser.addEventListener("click", function(){
  buttonDown = 1;
  toggleFunction();
});

rainbow.addEventListener("click", function(){
  buttonDown = 2;
  toggleFunction();
});

container.addEventListener("mousedown", function(event){
    if(event.target.className=="squares"){
    mousedown = 1;
    event.preventDefault();
    if(mousedown == 1){
      if(buttonDown == 0){event.target.style.backgroundColor = palette.value;} 
      else if(buttonDown == 1){event.target.style.backgroundColor = "greenyellow";}
      else if(buttonDown == 2){
        rainbowFunction();
        event.target.style.backgroundColor = randomColor;
      } 
    }
  } 
});

container.addEventListener("mouseup", function(event){  
    if(event.target.className=="squares"){
    mousedown = 0;
    event.preventDefault(); 
  } 
});
   
container.addEventListener("mouseenter", function(event){
    if(event.target.className=="squares"){
    event.preventDefault();
    if(mousedown == 1){
      if(buttonDown == 0){event.target.style.backgroundColor = palette.value;}
      else if(buttonDown == 1){event.target.style.backgroundColor = "greenyellow";}
      else if(buttonDown == 2){
        rainbowFunction();
        event.target.style.backgroundColor = randomColor;
      }
    }
  }  
}, true );

//functions

function rainbowFunction(){
  rainbowColor = Math.random()*10;
  if(rainbowColor<1){randomColor="blue"}
  else if(rainbowColor<2){randomColor="red"}
  else if(rainbowColor<3){randomColor="yellow"}
  else if(rainbowColor<4){randomColor="green"}
  else if(rainbowColor<5){randomColor="white"}
  else if(rainbowColor<6){randomColor="greenyellow"}
  else if(rainbowColor<7){randomColor="grey"}
  else if(rainbowColor<8){randomColor="purple"}
  else if(rainbowColor<9){randomColor="orange"}
  else if(rainbowColor<10){randomColor="deeppink"}
}

function toggleFunction(){
  if(buttonDown == 0){
    colorMode.style.backgroundColor = "yellow";
    colorMode.style.color = "red";
    eraser.style.backgroundColor = "red";
    eraser.style.color = "yellow";
    rainbow.style.backgroundColor = "red";
    rainbow.style.color = "yellow";
  }
  else if(buttonDown == 1){
    eraser.style.backgroundColor = "yellow";
    eraser.style.color = "red";
    colorMode.style.backgroundColor = "red";
    colorMode.style.color = "yellow";
    rainbow.style.backgroundColor = "red";
    rainbow.style.color = "yellow";
  }
  else if(buttonDown == 2){
    rainbow.style.backgroundColor = "yellow";
    rainbow.style.color = "red";
    eraser.style.backgroundColor = "red";
    eraser.style.color = "yellow";
    colorMode.style.backgroundColor = "red";
    colorMode.style.color = "yellow";
  }
}

/* this body listener avoids errors when i accidentally 
paint outside the container */

 body.addEventListener('mouseup', function(event){
    mousedown = 0;
}); 