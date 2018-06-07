const rgbHeader = document.querySelector("#rgbHeader");
const colorBoxes = [...document.querySelectorAll(".colorBoxes")];
const headerContainer = document.querySelector(".headerContainer");
const newColors = document.querySelector("#newColors");
const lowerColorBoxes = document.querySelector("#lowerColorBoxes");
const easyMode = document.querySelector("#easy");
const hardMode = document.querySelector("#hard");

////////////////////////////////////////////////////////////////
function random255() {
  return Math.floor(Math.random()*256);
}

// create a set of random numbers
function randomColor() {
  const red = random255();
  const green= random255();
  const blue= random255();
  return `${red}, ${green}, ${blue}`;
}

// Create an array of set of random numbers
function arrColors(num){
  const arrColors = [];
  for (let i=0 ; i < num; i++) {
    arrColors[i] = `${randomColor()}`;
  }
  return arrColors;
}

function newGame(num) {
  const arrColorsSet = arrColors(num);
  return arrColorsSet;
};

function pickedColor() {
  const randomPick = Math.floor(Math.random()*arrColorsSet.length);
  const pickedColor = `rgb(${arrColorsSet[randomPick]})`;
  return pickedColor;
};

function generateColors() {
  for (let i=0 ; i< colorBoxes.length ; i++) {
    colorBoxes[i].style.background = `rgb(${arrColorsSet[i]})`;
  }
}

function getNewColor() {
  return rgbHeader.innerHTML = `${theColor}`;
}

let arrColorsSet = newGame(6);
let theColor = pickedColor();
getNewColor();
generateColors();



// Click Color Event that will find out if it's the correct color
////////////////////////////////////////////////////////////////
const clickedColor = colorBoxes.map(box => {
  box.addEventListener("click", function () {
    const clickedColorVal = this.style.backgroundColor;
    const pickedColorVal = theColor;
    console.log(pickedColorVal);
    console.log(clickedColorVal);

    if (clickedColorVal === pickedColorVal) {
      return colorBoxes.map(box => {
        const correctBGColor = clickedColorVal;
        box.style = `background-color: ${clickedColorVal}; opacity: 1;`;
        headerContainer.style = `background-color: ${clickedColorVal};`;
      });
    }
    else {
      return this.style = "background: #232323; opacity: 0;";
    }
  })});
  ////////////////////////////////////////////////////////////////



  // Functions for Click Events
  ////////////////////////////////////////////////////////////////
  function backToDefault() {
    theColor = pickedColor();
    getNewColor();
    generateColors();
    headerContainer.style = `background-color: #067e82;`;
  }

  function easyModeOn() {
    arrColorsSet = newGame(3);
    lowerColorBoxes.style.display = "none";
    backToDefault();
  }

  function hardModeOn() {
    arrColorsSet = newGame(6);
    lowerColorBoxes.style.display = "flex";
    backToDefault();
  }

  // Click Event Handlers
  ////////////////////////////////////////////////////////////////
  newColors.addEventListener("click", () => {
    if(easyMode.classList.contains("selectedMode")) {
      return easyModeOn();
    }
    else {
      return hardModeOn();
    }
  });

  easyMode.addEventListener("click", () => {
    easyMode.classList.add("selectedMode");
    hardMode.classList.remove("selectedMode");
    return easyModeOn();
  });

  hardMode.addEventListener("click", () => {
    hardMode.classList.add("selectedMode");
    easyMode.classList.remove("selectedMode");
    return hardModeOn();
  });
  ////////////////////////////////////////////////////////////////
