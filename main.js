let ul = document.querySelector(".suggestions");
let inp = document.querySelector(".search");
// let lis = ;

let list;
let getData = async () => {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  // console.log(endpoint);
  list = await fetch(endpoint)
    .then((js) => js.json())
    .then((d) => d);
  console.log("list done");
};
getData();
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});
let slc = -1;
inp.addEventListener("keyup", (e) => {
  if (e.key === "ArrowDown") {
    if (!document.querySelectorAll(".suggestions li")[slc + 1]) return;
    slc++;
    document
      .querySelectorAll(".suggestions li")
      .forEach((e) => e.classList.remove("active"));
    document.querySelectorAll(".suggestions li")[slc].classList.add("active");
    console.log(slc);
  } else if (e.key === "Enter") {
    inp.value = document.querySelector("li.active").textContent;
    ul.innerHTML = "";
  } else if (e.key === "ArrowUp") {
    if (slc <= 0) return;
    slc = slc - 1;
    document
      .querySelectorAll(".suggestions li")
      .forEach((e) => e.classList.remove("active"));
    document.querySelectorAll(".suggestions li")[slc].classList.add("active");
  } else {
    ul.innerHTML = "";
    ul.innerHTML = "";
    if (inp.value === "") {
      ul.innerHTML = `<li>Filter for a city</li>
        <li>or a state</li>`;
      return;
    }
    slc = -1;
    let q = list.filter((c) =>
      c.city.toLowerCase().includes(inp.value.toLowerCase().trim()) ? c : false
    );
    q.forEach((c) => {
      let txt = document.createTextNode(c.city);
      let li = document.createElement("li");
      li.appendChild(txt);
      ul.append(li);
    });
  }
});
