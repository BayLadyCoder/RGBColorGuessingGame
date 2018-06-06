
function random255() {
  return Math.floor(Math.random()*256);
}

function randomColor() {
  const red = random255();
  const green= random255();
  const blue= random255();
  return `${red}, ${green}, ${blue}`;
}

const arrColors = [];

// Create an array of set of random numbers
for (let i=0 ; i < 6; i++) {
  arrColors[i] = `${randomColor()}`;
}

console.log(arrColors);

const rgbHeader = document.querySelector("#rgbHeader");

function pickedColor() {
  const randomPick = Math.floor(Math.random()*arrColors.length)
  return arrColors[randomPick];
}

function getNewColor() {
  rgbHeader.innerHTML = `RGB ${pickedColor()}`;
}

getNewColor();

const colorBoxes = [...document.querySelectorAll(".colorBoxes")];

for (let i=0 ; i< colorBoxes.length ; i++) {
  colorBoxes[i].style.background = `rgb(${arrColors[i]})`;
}
console.log(colorBoxes);
