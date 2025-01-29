document.addEventListener('DOMContentLoaded', () => {

const burgerMenu = document.querySelector('.burger-btn');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.sidebar__close-btn');
console.log('Клик по бургеру:', burgerMenu);

burgerMenu.addEventListener('click', () => {
  overlay.classList.add('active');
  document.body.classList.add('menu-open');
});


closeButton.addEventListener('click', () => {
  overlay.classList.remove('active');
  document.body.classList.remove('menu-open');
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});

});