let arc = document.querySelector(".arc");
let sr = document.querySelector("#s");
let mr = document.querySelector("#m");
let hr = document.querySelector("#h");
var r = document.querySelector(":root");
let t = 0;
// row.forEach((r) => (r.textContent = 6));
let EditeCss = () => {
  // Set the value of variable --blue to another value (in this case "lightblue")
  let s = new Date().getSeconds();
  let m = new Date().getMinutes();
  let h = new Date().getHours();
  sr.textContent = s;
  mr.textContent = m;
  hr.textContent = h;
  if (s >= 59) {
    console.log("boo");
    // sr.style.transition = "none !important";
    sr.style.removeProperty("transition");
    console.log(sr.style.transition);
  }
  t++;
  r.style.setProperty("--sDeg", `${s * 6}deg`);
  r.style.setProperty("--mDeg", `${m * 6}deg`);
  r.style.setProperty("--hDeg", `${h * 30}deg`);
};
setInterval(() => {
  EditeCss();
  document.querySelector("h1").textContent = t.toString();
}, 900);
