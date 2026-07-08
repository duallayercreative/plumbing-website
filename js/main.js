// ========================
// NAVBAR - Glassmorphism on Scroll
// ========================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});


// ========================
// MOBILE MENU TOGGLE
// ========================
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    menuBtn.classList.add("menu-open");
    mobileMenu.classList.add("mobile-menu-open");
    document.body.classList.add("no-scroll");
  } else {
    menuBtn.classList.remove("menu-open");
    mobileMenu.classList.remove("mobile-menu-open");
    document.body.classList.remove("no-scroll");
  }
});


// ========================
// CLOSE MOBILE MENU ON LINK CLICK
// ========================
const mobileLinks = document.querySelectorAll(".mobile-link");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("menu-open");
    mobileMenu.classList.remove("mobile-menu-open");
    document.body.classList.remove("no-scroll");
    menuOpen = false;
  });
});