// Set the wedding date to January 31, 2025, at midnight
const weddingDate = new Date('05/18/2025 8:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft >= 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    } else {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = "It's Our Wedding Day!";
    }
}, 1000);

// Reveal elements on scroll
window.addEventListener('scroll', () => {
    const rsvpSection = document.querySelector('.rsvp');
    const mapsSection = document.querySelector('.maps');
    const detailsSection = document.querySelector('.details');

    const rsvpPosition = rsvpSection.getBoundingClientRect().top;
    const mapsPosition = mapsSection.getBoundingClientRect().top;
    const detailsPosition = detailsSection.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.1;

    if (rsvpPosition < screenPosition) {
        rsvpSection.classList.add('visible');
        rsvpSection.classList.remove('hidden');
    }
    else {
        rsvpSection.classList.add('hidden');
        rsvpSection.classList.remove('visible');
    }

    if (detailsPosition < screenPosition) {
        detailsSection.classList.add('visible');
        detailsSection.classList.remove('hidden');
    }
    else {
        detailsSection.classList.add('hidden');
        detailsSection.classList.remove('visible');
    }

    if (mapsPosition < screenPosition) {
        mapsSection.classList.add('visible');
        mapsSection.classList.remove('hidden');
    }
    else {
        mapsSection.classList.add('hidden');
        mapsSection.classList.remove('visible');
    }
});