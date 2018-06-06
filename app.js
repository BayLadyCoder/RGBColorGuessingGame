
function random255() {
  return Math.floor(Math.random()*256);
}

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



const rgbHeader = document.querySelector("#rgbHeader");
const colorBoxes = [...document.querySelectorAll(".colorBoxes")];

function resetGame(num) {
  const arrColorsSet = arrColors(num);
  return arrColorsSet;
};

let arrColorsSet = resetGame(6);

function pickedColor() {
    const randomPick = Math.floor(Math.random()*arrColorsSet.length);
    const pickedColor = `rgb(${arrColorsSet[randomPick]})`;
    return pickedColor;
};

let theColor = pickedColor();

  function generateColors() {
    for (let i=0 ; i< colorBoxes.length ; i++) {
      colorBoxes[i].style.background = `rgb(${arrColorsSet[i]})`;
    }
  }
  ////////////////////////////////////////////////////////////////
  function getNewColor() {
    return rgbHeader.innerHTML = `RGB ${theColor}`;
  }

  getNewColor();
  generateColors();







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
    });
  }
  else {
    return this.style = "background: #232323; opacity: 0;";
  }
})});
////////////////////////////////////////////////////////////////


const newColors = document.querySelector("#newColors");
const whichModes = [...document.querySelectorAll(".modeOptions")];
const easyMode = whichModes[0];
const hardMode = whichModes[1];

easyMode.addEventListener("click", function() {
  easyMode.classList.add("selectedMode");
  hardMode.classList.remove("selectedMode");
});

hardMode.addEventListener("click", function() {
  hardMode.classList.add("selectedMode");
  easyMode.classList.remove("selectedMode");
});


// })addEventListener("click", function () {
//   easyMode.classList.toggle("selectedMode");
//   hardMode.classList.toggle("selectedMode");
// });

newColors.addEventListener("click", function (){
    arrColorsSet = resetGame(6);
    theColor = pickedColor();
    getNewColor();
    generateColors();
});
////////////////////////////////////////////////////////////////
