// ======= Loading Screen ========

window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const logoAnimation = document.getElementById('logo-animation');
    const mainContent = document.getElementById('main-content');
    const timerElement = document.getElementById('timer');
    let countdown = 8;

    // Function to hide the loading screen and show the main content
    function showMainContent() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }

 //Function to update the countdown timer
function updateTimer() {
    timerElement.textContent = `Page will load in ${countdown} seconds...`;
    countdown--;

    if (countdown >= 0) {
        setTimeout(updateTimer, 1000); // Update timer every second
    } else {
        showMainContent();
    }
}

    // Add an event listener to check if the logo animation ends
    logoAnimation.addEventListener('ended', showMainContent);

    // Add a timed delay of 8 seconds in case the logo animation does not trigger the automatic switch
    setTimeout(showMainContent, 8000);

    // Start the countdown timer
    updateTimer();
});

// === Character Section ===
const characters = [
  {
    name: 'Kael the Riftborn',
    image: 'media/kael.jpg',
    description: 'A lost warrior from a collapsed timeline, wielding blades shaped by memory.',
  },
  {
    name: 'Elyra of the Dust',
    image: 'media/elyra.jpg',
    description: 'Mystic scavenger who bends sandstorms and silence to her will.',
  },
  {
    name: 'Vorr, Mindforged Titan',
    image: 'media/vorr.jpg',
    description: 'A biomechanical juggernaut animated by hive consciousness and ancient wrath.',
  },
];

const container = document.getElementById('character-container');
if (container) {
  characters.forEach(char => {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>${char.description}</p>
    `;
    container.appendChild(card);
  });
}

// === Countdown Timer ===
const countdown = document.getElementById('countdown');
const releaseDate = new Date(Date.now() + (2 * 365 + 14) * 24 * 60 * 60 * 1000);

function updateCountdown() {
  const now = new Date();
  const diff = releaseDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (countdown) {
    countdown.textContent = `Release in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
updateCountdown();
setInterval(updateCountdown, 1000);

// === Infinite Carousel ===
const carousel = document.getElementById('carousel');
if (carousel) {
  // Prevent infinite cloning
  if (!carousel.dataset.cloned) {
    const imgs = carousel.querySelectorAll('img');
    imgs.forEach(img => {
      const clone = img.cloneNode(true);
      carousel.appendChild(clone);
    });
    carousel.dataset.cloned = 'true';
  }

  function autoScroll() {
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
      carousel.scrollLeft = 0;
    } else {
      carousel.scrollLeft += 1;
    }
  }

  setInterval(autoScroll, 20);
}

// === Scroll Fade Animation ===
const faders = document.querySelectorAll(
  '.fade-left, .fade-right, .fade-up, .fade-down'
);

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    } else {
      entry.target.classList.remove('appear');
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
