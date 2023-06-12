var movePixels = 10;
var delayMs = 50;
var kikiTimer = null;
function kikiFly() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}

function startkikiFly() {
  kikiTimer = window.setInterval(kikiFly, delayMs);
}

function onStartClick() {
  startkikiFly();
  start.setAttribute("disabled", "disabled");
  stop.removeAttribute("disabled");
  speed.removeAttribute("disabled");
}

var start = document.getElementById('start');
start.addEventListener('click', onStartClick);

function onStopClick() {
  window.clearInterval(kikiTimer);
  stop.setAttribute("disabled", "disabled");  
  speed.setAttribute("disabled", "disabled");  
  start.removeAttribute("disabled");
}
  
var stop = document.getElementById('stop');
stop.addEventListener('click', onStopClick);
stop.setAttribute("disabled", "disabled");

function onSpeedClick() {
  movePixels += 5;
  var speed = movePixels * (1000/50);
  document.getElementById('info').innerHTML = 'Current speed: ' + speed + 'px per second';
}

var speed = document.getElementById('speed');
speed.addEventListener('click', onSpeedClick);
speed.setAttribute("disabled", "disabled");


/*
made by Athena Granger with the help of this tutorial: http://www.pairuptocode.com/exercises/catwalk.html
and stars from here:
http://stackoverflow.com/questions/33948011/creating-a-starry-background-in-css
*/