const windowWidth = window.innerWidth;
const swiper = new Swiper(".pf-testimonial-swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    freeMode: true,
    grabCursor: true,
    on: {
        init: function () {
            if (windowWidth > 768) {
                this.setTranslate(-240);
            }
        },
    },
});

// Toggle functionality for before section
const beforeToggle = document.querySelector('.pf-before-section .pf-before-toggle');
const beforeSlides = document.querySelector('.pf-before-section .pf-before-sildes');
const beforeWrapper = document.querySelector('.pf-before-section .pf-before-sildes .pf-before-wrapper:nth-child(2)');
beforeToggle.addEventListener('click', function () {
    beforeWrapper.classList.toggle('pf-before-active');
    beforeSlides.classList.toggle('pf-active-btn');
})


// reels slider
new Swiper(".pf-reels-swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    freeMode: true,
    grabCursor: true,
    on: {
        init: function () {
            this.setTranslate(-240);
        },
    },
});

new Swiper(".pf-reels-bottom-swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    freeMode: true,
    grabCursor: true,
    on: {
        init: function () {
            this.setTranslate(-240);
        },
    },
});


// increase chart slider
new Swiper(".pf-inc-chart-slider", {
    navigation: {
        nextEl: ".pf-next-btn",
        prevEl: ".pf-prev-btn",
    },
});
// increase button slider
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".pf-increase-btn-slider", {
        slidesPerView: "auto",
        spaceBetween: 32,
    });
});