// js varaibles
const canvas = document.getElementById("canvs");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

// some event listener
document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

document.querySelector(".clr").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//save image
document.querySelector(".sav").addEventListener("click", function (e) {
  const link = document.createElement("a");
  link.download = "download.png";
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
// resize the canvas to match all browsers and screen
function resize() {
  ctx.canvas.width = window.innerWidth - 10;
  ctx.canvas.height = window.innerHeight - 10;
}

resize();

// start and stop events
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
let hue = Math.floor(Math.random() * 360);
// draw lines on the canvas
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 30;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
  // change colors
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}
