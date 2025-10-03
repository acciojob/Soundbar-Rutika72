const sounds = ['applause','boo','gasp','tada','victory','wrong'];
const buttonsContainer = document.getElementById('buttons');

// Create a button for each sound
sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();  // stop other sounds first
    let audio = document.getElementById(sound);

    if (!audio) {
      audio = document.createElement('audio');
      audio.id = sound;
      audio.src = `sounds/${sound}.mp3`; // ensure sounds folder contains files
      document.body.appendChild(audio);
    }

    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Add STOP button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'STOP';

stopBtn.addEventListener('click', () => {
  stopSounds();
});

buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // reset to start
    }
  });
}
