let vid = document.querySelector(".viewer");
let tog = document.querySelector(".toggle");
let vts = document.querySelector('[name="playbackRate"]');
let vol = document.querySelector('[name="volume"]');
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
tog.addEventListener("click", () => {
  if (tog.id === "play") {
    tog.id = "pause";
    vid.play();
  } else {
    tog.id = "play";
    tog.textContent = "❚❚";
    vid.pause();
  }
});

vid.addEventListener("timeupdate", () => {
  const percent = (vid.currentTime / vid.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
});
vts.addEventListener("change", () => {
  vid.playbackRate = parseInt(vts.value);
});
vol.addEventListener("change", () => {
  vid.volume = parseInt(vol.value);
});

document.querySelector('[data-skip="-10"]').addEventListener("click", (e) => {
  vid.currentTime =
    vid.currentTime + parseFloat(e.target.getAttribute("data-skip"));
});
document.querySelector('[data-skip="25"]').addEventListener("click", (e) => {
  vid.currentTime =
    vid.currentTime + parseFloat(e.target.getAttribute("data-skip"));
});
