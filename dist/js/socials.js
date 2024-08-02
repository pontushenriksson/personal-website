document.addEventListener('DOMContentLoaded', function () {
  function updateTime() {
    const statsElement = document.querySelector('#stats');
    const timeSpan = statsElement.querySelector('span');
    const iconElement = statsElement.querySelector('.statsIcon');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes.toString().padStart(2, '0');

    timeSpan.textContent = `${formattedHours}:${formattedMinutes} ${amPm}`;

    if (hours >= 12) {
      // PM (afternoon/evening)
      iconElement.className = 'statsIcon fa-solid fa-moon';
      iconElement.style.color = '#4745C2';
    } else {
      // AM (morning)
      iconElement.className = 'statsIcon fa-solid fa-sun';
      iconElement.style.color = '#DBDE4B';
    }
  }

  updateTime();
  setInterval(updateTime, 60000); // Update every minute

  // Set the volume of the video to 50%
  var video = document.getElementById('personalTrailer');
  video.volume = 0.5;
});
