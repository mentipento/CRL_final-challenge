//script.js

const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav__wrapper');
burger.addEventListener('click', () => {
  const isExpanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !isExpanded);
  burger.classList.toggle('nav__burger--inactive');
  nav.classList.toggle('nav__wrapper--inactive');
});