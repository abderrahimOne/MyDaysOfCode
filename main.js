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
