const menuToggle = document.querySelector('.menu-toggle input');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('slide-in');
});
