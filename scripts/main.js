import { genMoodHtml } from "./moods.js";
const container = document.querySelector("#container");

let moodHTML = genMoodHtml();

container.innerHTML = moodHTML;
