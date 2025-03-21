let lastScrollTop = 0;
const navbar = document.querySelector(".header-effect");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-78px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY === 0) {
            navbar.style.backgroundColor = "transparent";
        } else {
            navbar.style.backgroundColor = "#ffffff";
        }
    });
});


//swiper js

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1199: {
            slidesPerView: 4,
        }
    }
});

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });
});

window.addEventListener("scroll", () => {
    let scrollPosition = document.documentElement.scrollTop;
    let totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    let parentHeight = 100;
    let hello = (scrollPosition / totalScrollableHeight) * parentHeight;

    document.getElementById("elementHeight").style.height = hello + "px";
});



window.addEventListener("scroll", function () {
    const fixedDiv = document.querySelector(".scroll-animation-text");
    const targetDiv = document.querySelector("footer");

    const fixedRect = fixedDiv.getBoundingClientRect();
    const targetRect = targetDiv.getBoundingClientRect();

    if (
        fixedRect.top < targetRect.bottom &&
        fixedRect.bottom > targetRect.top &&
        fixedRect.left < targetRect.right &&
        fixedRect.right > targetRect.left
    ) {
        fixedDiv.style.color = "#ffffff";
    } else {
        fixedDiv.style.color = "";
    }
});


document.querySelectorAll(".arrow").forEach((arrow) => {
    arrow.addEventListener("click", function (e) {
        e.preventDefault();

        let parentLi = this.parentElement;
        let submenu = parentLi.querySelector(".submenu");

        if (submenu) {
            submenu.classList.toggle("open");
            this.classList.toggle("rotated");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".nav-item");
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const closeBtn = document.querySelector(".sidebar-close");
    const overlay = document.querySelector(".overlay");
    const contactUs = document.querySelector(".contact-us");

    function openSidebar() {
        sidebar.classList.add("open");
        overlay.classList.add("active");
        contactUs.style.display = "none";
    }

    function closeSidebar() {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
    }

    hamburgerBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);
});

