const burgers = document.querySelector('.burgers');
const menuBurgers = document.querySelector('.menu');

burgers.addEventListener('click', () => {
  menuBurgers.classList.toggle('menu--active');
});
