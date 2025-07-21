// === 1. MOBILE NAV TOGGLE ===
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// === 2. MUSIC CONTROL ===
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');

let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    musicBtn.textContent = '🔊'; // Playing
  } else {
    music.pause();
    musicBtn.textContent = '🎵'; // Muted
  }
  isPlaying = !isPlaying;
});

// === 3. SCROLL-TRIGGERED ANIMATIONS ===
const animatedElements = document.querySelectorAll('.feature-box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = '0.8s ease-out';
    }
  });
}, { threshold: 0.4 });

animatedElements.forEach(el => {
  observer.observe(el);
});
