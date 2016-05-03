var frontBtn = document.getElementById('front');
var backBtn = document.getElementById('back');
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var topBtn = document.getElementById('top');
var bottomBtn = document.getElementById('bottom');
var randomBtn = document.getElementById('random');
var cube = document.getElementById('cube');

function rotateFront() {
  cube.className = "rotate-front";
}

function rotateBack() {
  cube.className = "rotate-back";
}

function rotateLeft() {
  cube.className = "rotate-left";
}

function rotateRight() {
  cube.className = "rotate-right";
}

function rotateTop() {
  cube.className = "rotate-top";
}

function rotateBottom() {
  cube.className = "rotate-bottom";
}

function rotateRandom(){
var x = Math.floor((Math.random() * 6) + 1);
  if (x == 1) {
    cube.className = "rotate-front"
  } else if (x == 2){
    cube.className = "rotate-bottom"
  } else if (x == 3){
    cube.className = "rotate-left"
  } else if (x == 4){
    cube.className = "rotate-right"
  } else if (x == 5){
    cube.className = "rotate-top"
  } else if (x == 6){
    cube.className = "rotate-back"
  }
}

frontBtn.addEventListener('click', rotateFront);
backBtn.addEventListener('click', rotateBack);
leftBtn.addEventListener('click', rotateLeft);
rightBtn.addEventListener('click', rotateRight);
topBtn.addEventListener('click', rotateTop);
bottomBtn.addEventListener('click', rotateBottom);
randomBtn.addEventListener('click', rotateRandom);
