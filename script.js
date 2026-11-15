
window.addEventListener("DOMContentLoaded", () => {

  console.log("A little corner of the internet, made for Sharmi ♡");

  const music = document.getElementById("bgMusic");
  const musicButton = document.getElementById("musicToggle");

  if (!music || !musicButton) {
    console.error("Music elements could not be found.");
    return;
  }

  // Update button based on music state
  function updateMusicButton() {
    if (music.paused) {
      musicButton.textContent = "♫ Play our song";
      musicButton.setAttribute("aria-pressed", "false");
    } else {
      musicButton.textContent = "♫ Pause our song";
      musicButton.setAttribute("aria-pressed", "true");
    }
  }

  // Play or pause music
  musicButton.addEventListener("click", async () => {

    if (music.paused) {

      try {
        await music.play();
        updateMusicButton();

      } catch (error) {

        console.error("Music could not be played:", error);
        musicButton.textContent = "♫ Unable to play song";

      }

    } else {

      music.pause();
      updateMusicButton();

    }

  });

  // Keep button synchronised with audio
  music.addEventListener("play", updateMusicButton);
  music.addEventListener("pause", updateMusicButton);
  music.addEventListener("ended", updateMusicButton);

});
