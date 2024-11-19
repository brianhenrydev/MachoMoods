import { database } from "./database.js";

export const genMoodHtml = () => {
	const db = database;

	const moodHTML = db.map(
		(mood) =>
			`
<div class="mood-card">
  <h1>${mood.name}</h1>
  <img src="${mood.imageUrl}" alt="${mood.text}">
  <div class="advice">
    <div id="macho-advice">
      <h1>Macho Advice:</h1>
    </div>
    <div class="quotes--div">
      <p>${mood.quotes[0]}</p>
      <p>${mood.quotes[1]}</p>
    </div>
  </div>
</div>
</div>

`,
	);
	return moodHTML.join("");
};
