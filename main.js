let rg = document.querySelector("input#spacing");
let br = document.querySelector("input#blur");
let cl = document.querySelector("input#base");
let r = document.querySelector(":root");
cl.addEventListener("change", () => {
  r.style.setProperty("--color", cl.value);
});
br.addEventListener("change", (e) => {
  r.style.setProperty("--blur", e.target.value + "px");
});
rg.addEventListener("change", () => {
  r.style.setProperty("--space", rg.value + "px");
});
