// <!-- <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Speech Synthesis</title>
//     <link
//       href="https://fonts.googleapis.com/css?family=Pacifico"
//       rel="stylesheet"
//       type="text/css"
//     />
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body>
//     <div class="voiceinator">
//       <h1>The Voiceinator 5000</h1>

//       <select name="voice" id="voices">
//         <option value="">Select A Voice</option>
//       </select>

//       <label for="rate">Rate:</label>
//       <input name="rate" type="range" min="0" max="3" value="1" step="0.1" />

//       <label for="pitch">Pitch:</label>

//       <input name="pitch" type="range" min="0" max="2" step="0.1" />
//       <textarea name="text">Hello! I love JavaScript 👍</textarea>
//       <button id="stop">Stop!</button>
//       <button id="speak">Speak</button>
//     </div>

//     <script>
//       const synth = window.speechSynthesis;
//       let voices = [];
//       const voicesDropdown = document.querySelector('[name="voice"]');
//       const options = document.querySelectorAll(
//         '[type="range"], [name="text"]'
//       );
//       const speakButton = document.querySelector("#speak");
//       const stopButton = document.querySelector("#stop");

//       function loadVoices() {
//         voices = synth.getVoices();
//         console.log("l");
//         for (let i = 0; i < voices.length; i++) {
//           const option = document.createElement("option");
//           option.textContent = `${voices[i].name} (${voices[i].lang})`;
//           option.value = i;
//           voiceSelect.appendChild(option);
//         }
//       }
//       if ("onvoiceschanged" in synth) {
//         synth.onvoiceschanged = loadVoices;
//       } else {
//         loadVoices();
//       }
//       speakButton.onclick = () => {
//         const utterThis = new SpeechSynthesisUtterance(options[1].value);
//         utterThis.voice = voices[voicesDropdown.value];
//         synth.speak(utterThis);
//         options[1].blur();
//       };
//     </script>
//   </body>
// // </html> -->

let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let stopBtn = document.querySelector(".stop");
let end = false;
let clock = (m, s) => {
  end = false;
  let sec = s;
  let min = m;
  let c = document.querySelectorAll(".timer__controls button ,form");
  c.forEach((el) => (el.style.display = "none"));
  stopBtn.style.display = "block";
  let int = setInterval(() => {
    if ((min === 0 && sec === 0) || end) {
      let c = document.querySelectorAll(".timer__controls button ,form");
      c.forEach((el) => (el.style.display = "block"));
      stopBtn.style.display = "none";
      h1.innerHTML = "";
      p.innerHTML = "";
      return clearInterval(int);
    }
    if (sec === 0) {
      sec = 60;
      min--;
    }
    sec--;
    h1.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(
      2,
      "0"
    )}`;
    let date = new Date(Date.now() + min * 60 * 1000);
    p.textContent = `Be back at ${String(date.getHours()).padStart(
      2,
      "0"
    )}:${String(date.getMinutes() + 1).padStart(2, "0")}`;
  }, 1000);
};

document.querySelectorAll(".timer__button").forEach((b) =>
  b.addEventListener("click", (e) => {
    let min = Math.round(+e.target.getAttribute("data-time") / 60);
    let sec = min > 1 ? 0 : +e.target.getAttribute("data-time");
    clock(min > 1 ? min : 0, sec);
  })
);

stopBtn.onclick = () => (end = true);

document.querySelector("#custom").addEventListener("submit", (e) => {
  e.preventDefault();
  let min = Math.floor(+e.target.firstElementChild.value);
  let sec = min > 1 ? 0 : +e.target.firstElementChild.value * 100;
  clock(min, sec);
});
