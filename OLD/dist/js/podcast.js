document.addEventListener('DOMContentLoaded', function () {
  const playContainers = document.querySelectorAll('.play');

  playContainers.forEach(container => {
    const playIcon = container.querySelector('.playIcon');
    const audio = container.querySelector('audio');
    const episodeTime = container.querySelector('.episodeTime');

    // Load the audio metadata to get the duration
    audio.addEventListener('loadedmetadata', function () {
      const duration = formatTime(audio.duration);
      episodeTime.textContent = `${duration}`;
    });

    playIcon.addEventListener('click', function () {
      if (audio.paused) {
        // Pause all other audio elements
        document.querySelectorAll('audio').forEach(otherAudio => {
          if (otherAudio !== audio) {
            otherAudio.pause();
            otherAudio
              .closest('.play')
              .querySelector('.playIcon')
              .classList.remove('playing');
          }
        });
        audio.play();
        playIcon.classList.add('playing');
      } else {
        audio.pause();
        playIcon.classList.remove('playing');
      }
    });

    audio.addEventListener('timeupdate', function () {
      const currentTime = formatTime(audio.currentTime);
      const duration = formatTime(audio.duration);
      episodeTime.textContent = `${currentTime}/${duration}`;
    });

    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    audio.addEventListener('ended', function () {
      playIcon.classList.remove('playing');
    });
  });
});
