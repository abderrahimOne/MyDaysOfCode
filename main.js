let slides = document.querySelectorAll(".slide-in");
window.onscroll = (e) => {
  slides.forEach((sl) => {
    if (600 >= sl.y && -400 <= sl.y) {
      sl.style.opacity = 1;
      sl.style.transform = "none";
    } else {
      sl.style.opacity = 0;
      sl.style.transform = " translateX(-30%) scale(0.95)";
    }
  });
};
