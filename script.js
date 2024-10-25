
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const moreButton = document.querySelector('.more-button button');
    const hiddenSpeaker = document.querySelector('.speakers.hidden');

    moreButton.addEventListener('click', function () {
        if (hiddenSpeaker) {
            hiddenSpeaker.classList.remove('hidden'); 
            moreButton.style.display = 'none'; 
        }
    });
});