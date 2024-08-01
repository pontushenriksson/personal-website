function toggleAbout() {
  let shortAbout = document.querySelector('.short-about');
  let longAbout = document.querySelector('.long-about');
  let btn = document.querySelector('.aboutButton');

  if (shortAbout.style.display !== 'none') {
    shortAbout.style.display = 'none';
    longAbout.style.display = 'block';
    btn.innerText = 'View Less';
  } else {
    shortAbout.style.display = 'block';
    longAbout.style.display = 'none';
    btn.innerText = 'Learn More';
  }

  // This line makes the button link to the #about section after the click
  window.location.hash = '#about';
}

function toggleCertificates() {
  let bestCertificates = document.querySelector('.best-certificates');
  let allCertificates = document.querySelector('.all-certificates');
  let btn = document.querySelector('.certificateButton');

  if (bestCertificates.style.display !== 'none') {
    bestCertificates.style.display = 'none';
    allCertificates.style.display = 'block';
    btn.innerText = 'View Less';
  } else {
    bestCertificates.style.display = 'block';
    allCertificates.style.display = 'none';
    btn.innerText = 'View All';
  }

  // This line makes the button link to the #certificates section after the click
  window.location.hash = '#certificates';
}
