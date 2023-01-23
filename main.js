let inb = document.querySelector(".imbox");
let items = document.querySelectorAll(".item");

document.addEventListener("keydown", (k) => {
  if (k.shiftKey) {
    document.addEventListener("click", (e) => {
      if (e.target.parentNode.className === "item" && e.target.checked) {
        let i = false;
        items.forEach((el) => {
          if (e.target.parentNode === el || i) {
            i = true;
            return;
          } else {
            el.firstElementChild.checked = true;
          }
        });
      }
    });
  }
});
