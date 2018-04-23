// Random integer function taken from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const CirclesRandomColorAnimation = function CirclesRandomColorAnimation()  {

  this.canvas = document.createElement('canvas');
  let w = window.innerWidth;
  let h = window.innerHeight;
  this.canvas.height = h;
  this.canvas.width = w;
 
  let ctx = this.canvas.getContext('2d');

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, w - 1, h - 1);

  document.body.insertBefore(this.canvas, document.body.nextSibling);

  this.resetButton = document.createElement("button");
  this.resetButton.innerHTML = "Reset Canvas";
  // attach event listener to the button 
  this.resetButton.addEventListener('click', function resetButtonClickEventListener(e) {
    if (e.target && e.target.nodeName === 'BUTTON') {
      console.log("Reset Clicked");
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, w - 1, h - 1);
    }
  });

  document.body.insertBefore(this.resetButton, document.body.nextSibling);

  let numFrames = 0;
  window.requestAnimationFrame(function draw() { 

    //Draw circle every 10 frames
    numFrames++;
    if (numFrames % 10 === 1) {
      let r = getRandomIntInclusive(0, 255);
      let g = getRandomIntInclusive(0, 255);
      let b = getRandomIntInclusive(0, 255);
      let x = getRandomIntInclusive(0, w - 1);
      let y = getRandomIntInclusive(0, h - 1);
      let a = getRandomIntInclusive(0, 255);
      let radius = getRandomIntInclusive(10, 100);

      ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, true); // Outer circle
      ctx.fill();
    } // if

    window.requestAnimationFrame(draw);
  });
} //CirclesRandomColorAnimation


// Allow inclusion in browers and node
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    CircleseRandomColorAnimation,
  };
} else {
  window.CircleseRandomColorAnimation = CirclesRandomColorAnimation;

  window.onload = function onload() {
    window.crca = new CirclesRandomColorAnimation();
  };
} //else