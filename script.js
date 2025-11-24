// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile navigation toggle (if needed in future)
const navToggle = document.createElement('button');
navToggle.textContent = '☰';
navToggle.classList.add('nav-toggle');
const nav = document.querySelector('nav');
nav.insertBefore(navToggle, nav.firstChild);

navToggle.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

console.log("Website loaded and interactive!");