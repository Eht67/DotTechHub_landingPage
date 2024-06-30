let menu = document.querySelector('#menu');
let menuToggler = document.querySelector('#hamburger');
let backdrop = document.querySelector('#backdrop');
let header = document.querySelectorAll('.header')[0];
let isMenuOpen = false;

menuToggler.addEventListener('click', () => {
    if (!isMenuOpen) {
        menu.style.right = '0';
        backdrop.style.width = '100vw';
        menuToggler.style.transform = 'translateX(var(--menu-toggler-distane))';
        menuToggler.classList.add('is-active');
        isMenuOpen = true;
    }

    else if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform = 'translateX(0)';
        menuToggler.classList.remove('is-active');
        isMenuOpen = false;
    }
})

menu.addEventListener('click', () => {
    if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform = 'translateX(0)';
        menuToggler.classList.remove('is-active');
        isMenuOpen = false;
    }
})

backdrop.addEventListener('click', () => {
    if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform = 'translateX(0)';
        menuToggler.classList.remove('is-active');
        isMenuOpen = false;
    }
})

window.addEventListener('scroll', () => {
    if (scrollY >= 644) {
        header.classList.add('scrolled');
    }

    else {
        header.classList.remove('scrolled');
    }
})


let carousals = document.querySelectorAll('.carousal');

for (let i = 0; i < carousals.length; i++) {
    let carousal = carousals[i];
    let left_btn = carousal.querySelectorAll('.left-button')[0];
    let right_btn = carousal.querySelectorAll('.right-button')[0];
    let carousal_inner = carousal.querySelectorAll('.carousal-inner')[0];
    let carousal_item_width = carousal_inner.querySelectorAll('.carousal-item')[0].offsetWidth;

    left_btn.addEventListener('click', () => {
        carousal_inner.scrollLeft = carousal_inner.scrollLeft - carousal_item_width;
    })

    right_btn.addEventListener('click', () => {
        carousal_inner.scrollLeft = carousal_inner.scrollLeft + carousal_item_width;
    })

    if (carousal_inner.scrollLeft === 0) {
        left_btn.classList.add('disabled');
    }

    carousal_inner.addEventListener('scroll', () => {
        if (carousal_inner.scrollLeft === 0) {
            left_btn.classList.add('disabled');
        }

        if (carousal_inner.scrollLeft > 0 && carousal_inner.scrollLeft < (carousal_inner.scrollWidth - carousal_inner.offsetWidth)) {
            left_btn.classList.remove('disabled');
            right_btn.classList.remove('disabled');
        }

        if (carousal_inner.scrollLeft === carousal_inner.scrollWidth - carousal_inner.offsetWidth) {
            right_btn.classList.add('disabled');
        }
    })

}