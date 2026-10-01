function displayLyrics (response) {
  new Typewriter("#lyrics", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generateLyrics(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "7837bfc4b7002et805ac5f3c3foa9afb";
    let context =
    "You are a talented songwriter. You mission is to generate a 4 line chorus or verse in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the song. Sign the lyrics with 'SheCodes AI' inside a <strong> element at the end of the chorus or verse and NOT at the beginning.Do not include markdown formatting, backticks, or code blocks";
    let prompt = `User instructions: Generate a love song about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
    
    
    let lyricsElement = document.querySelector("#lyrics");
    lyricsElement.classList.remove("hidden");
    lyricsElement.innerHTML = `<div class="generating"> ⏳ Generating song lyrics about ${instructionsInput.value}</div>`;
    
    axios.get(apiURL).then(displayLyrics);
  
}

let lyricsFormElement = document.querySelector("#lyrics-generator-form")
lyricsFormElement.addEventListener("submit", generateLyrics)