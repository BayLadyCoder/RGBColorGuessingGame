

const red = Math.floor(Math.random()*255);
const green = Math.floor(Math.random()*255);
const blue = Math.floor(Math.random()*255);
const randomColor = `${red}, ${green}, ${blue}`;

const rgbHeader = document.querySelector("#rgbHeader");

function getNewColor() {
  rgbHeader.innerHTML = `${randomColor}`;
}

getNewColor();
