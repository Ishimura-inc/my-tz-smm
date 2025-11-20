const burgers = document.querySelector('.burgers'); // кнопка бургер
const menuList = document.querySelector('.menu__list'); // меню
const burgerIcon = document.getElementById('burger'); // бургер (для класса active)

// функция отключения transition на время ресайза
function disableTransition() {
  menuList.style.transition = 'none';
}

// функция включения transition при клике
function enableTransition() {
  menuList.style.transition = 'transform .3s ease-in-out, opacity .3s ease-in-out';
}

// клик на бургер меню
burgers.addEventListener('click', () => {
  enableTransition();
  menuList.classList.toggle('menu--active');
});

// клик вне меню закрывает его
document.addEventListener('click', (event) => {
  const isClickInsideMenu = menuList.contains(event.target);
  const isClickOnBurger = burgers.contains(event.target);

  if (!isClickInsideMenu && !isClickOnBurger) {
    enableTransition();
    menuList.classList.remove('menu--active');
	if (burgerIcon) burgerIcon.classList.remove('active');
  }
});

// ресайз — удаляем меню без анимации и снимаем active с бургер-иконки
window.addEventListener('resize', () => {
  disableTransition();
  menuList.classList.remove('menu--active');
  if (burgerIcon) burgerIcon.classList.remove('active');
});

// клик на отдельный бургер (если используется для анимации линии)
if (burgerIcon) {
  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
  });
}