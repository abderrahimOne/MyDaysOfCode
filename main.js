let ads = document.querySelectorAll("audio");
let keys = document.querySelectorAll(".key");
document.addEventListener("keydown", (e) => {
  ads.forEach((a) => {
    if (a.getAttribute("data-key") == e.keyCode) {
      a.play();
    }
  });
});
document.addEventListener("click", (e) => {
  ads.forEach((a) => {
    if (
      a.getAttribute("data-key") == e.target.getAttribute("data-key") ||
      a.getAttribute("data-key") == e.target.parentNode.getAttribute("data-key")
    ) {
      a.play();
    }
  });
});
