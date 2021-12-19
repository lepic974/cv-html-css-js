import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';

// Navbar
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});


// Typed.js
var typed = new Typed('.typed', {
    strings: ["Esse, quisquam autem ut adipisci reeum reiciendis.", "<strong>HTML, CSS, JavaScript</strong>", "PHP", "<strong>HTML 5 !!!</strong>", "<strong>CSS 3 !!!</strong>", "<strong>JavaScript !!!</strong>"],
    typeSpeed: 20,
    backSpeed: 20,
    smartBackspace: true,
    loop: true
});

// Compteur Live
let compteur = 0;

$(window).scroll(function () {

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function () {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 10000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });
        compteur = 1;
    }
});


// Swiper
// var swiper = new Swiper('.swiper');

var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 4000
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});

// AOS
AOS.init()
