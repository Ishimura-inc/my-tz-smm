const burger = document.getElementById('burger');
const menu = document.querySelector('.menu-burger');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu-burger--active');
});