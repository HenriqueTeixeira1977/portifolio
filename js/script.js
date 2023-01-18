/*  Menu Scroll  */
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

/*  Menu Burguer Mobile  */
/*
let menu = document.querySelector('#burguer');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-solid fa-bars');
    navbar.classList.toggle('active');
};
*/

const btnMobile = document.getElementById('btn-mobile');
    function toggleMenu() {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }
btnMobile.addEventListener('click', toggleMenu);