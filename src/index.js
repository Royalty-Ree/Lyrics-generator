function generateLyrics(event) {
    event.preventDefault();

    new Typewriter("#lyrics", {
  strings: "Whenever I'm alone with you",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

let lyricsFormElement = document.querySelector("lyrics-generator-form")
lyricsFormElement.addEventListener("submit", generateLyrics)