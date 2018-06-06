
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

const arrColorsSet = arrColors(6);

function pickedColor() {
  const randomPick = Math.floor(Math.random()*arrColorsSet.length);
  const pickedColor = `rgb(${arrColorsSet[randomPick]})`;
  return pickedColor;
}
function generateColors() {
  for (let i=0 ; i< colorBoxes.length ; i++) {
    colorBoxes[i].style.background = `rgb(${arrColorsSet[i]})`;
  }
}
////////////////////////////////////////////////////////////////
function getNewColor() {
  return rgbHeader.innerHTML = `RGB ${pickedColor()}`;
}

getNewColor(6);
generateColors();
////////////////////////////////////////////////////////////////


const clickedColor = colorBoxes.map(box => {
  box.addEventListener("click", function () {
  const clickedColorVal = this.style.backgroundColor;
  const pickedColorVal = pickedColor();

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
