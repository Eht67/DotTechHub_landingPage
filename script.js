let menu = document.querySelector('#menu');
let menuToggler = document.querySelector('#hamburger');
let backdrop = document.querySelector('#backdrop');
let header = document.querySelectorAll('.header')[0]; 
let isMenuOpen = false;

menuToggler.addEventListener('click', () => {
    if (!isMenuOpen) {
        menu.style.right = '0';
        backdrop.style.width = '100vw';
        menuToggler.style.transform =  'translateX(var(--menu-toggler-distane))';
        menuToggler.classList.add('is-active');
        isMenuOpen = true;
    }

    else if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform =  'translateX(0)';
        menuToggler.classList.remove('is-active');
        isMenuOpen = false;
    }
})

menu.addEventListener('click', () => {
    if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform =  'translateX(0)';
        menuToggler.classList.remove('is-active');
        isMenuOpen = false;
    }
})

backdrop.addEventListener('click', () => {
    if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform =  'translateX(0)';
        menuToggler.classList.remove('is-active');
        isMenuOpen = false;
    }
})

window.addEventListener('scroll', () => {
    if (scrollY >= 700){
        header.classList.add('scrolled');
    }

    if (scrollY < 700){
        header.classList.remove('scrolled');
    }
})