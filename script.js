let menu = document.querySelector('#menu');
let menuToggler = document.querySelector('#menu-toggler');
let backdrop = document.querySelector('#backdrop');
let header = document.querySelectorAll('.header')[0]; 
let isMenuOpen = false;

menuToggler.addEventListener('click', () => {
    if (!isMenuOpen) {
        menu.style.right = '0';
        backdrop.style.width = '100vw';
        menuToggler.style.transform =  'translateX(var(--menu-toggler-distane))';
        menuToggler.classList.remove('fa-bars');
        menuToggler.classList.add('fa-close');
        isMenuOpen = true;
    }

    else if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform =  'translateX(0)';
        menuToggler.classList.remove('fa-close');
        menuToggler.classList.add('fa-bars');
        isMenuOpen = false;
    }
})

menu.addEventListener('click', () => {
    if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform =  'translateX(0)';
        menuToggler.classList.remove('fa-close');
        menuToggler.classList.add('fa-bars');
        isMenuOpen = false;
    }
})

backdrop.addEventListener('click', () => {
    if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform =  'translateX(0)';
        menuToggler.classList.remove('fa-close');
        menuToggler.classList.add('fa-bars');
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