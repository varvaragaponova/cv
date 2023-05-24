/*Menu-burger*/

const menu = document.querySelector(".menu");
const menuBurger = document.querySelector(".menu-burger");
const overlay = document.querySelector(".overlay");

menuBurger.addEventListener('click', function() {
    menu.classList.toggle('menu_open');
    menuBurger.classList.toggle('menu-burger_open');
    overlay.classList.toggle('overlay_active');
})