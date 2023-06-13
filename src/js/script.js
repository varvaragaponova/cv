/*Menu-burger*/

const menu = document.querySelector(".menu");
const menuBurger = document.querySelector(".menu-burger");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

menuBurger.addEventListener('click', function() {
    menu.classList.toggle('menu_open');
    menuBurger.classList.toggle('menu-burger_open');
    overlay.classList.toggle('overlay_active');
    body.classList.toggle('no_scroll');
    event.stopPropagation();
})

document.body.addEventListener('click', function(event) {
    if (event.target === menu) return;
    if (menu.classList.contains('menu_open')) {
        menu.classList.remove('menu_open');
        menuBurger.classList.remove('menu-burger_open');
        body.classList.remove('no_scroll');
        overlay.classList.remove('overlay_active');
    }
});