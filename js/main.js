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

// ========================
// BOOKING FORM HANDLER
// ========================
const bookingForm = document.getElementById("booking-form");
const submitBtn = document.getElementById("submit-btn");
const btnText = document.getElementById("btn-text");
const btnSpinner = document.getElementById("btn-spinner");
const btnArrow = document.getElementById("btn-arrow");
const successMessage = document.getElementById("success-message");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Show loading state
  btnText.textContent = "Sending...";
  btnSpinner.classList.remove("hidden");
  btnArrow.classList.add("hidden");
  submitBtn.disabled = true;
  submitBtn.classList.add("opacity-80", "cursor-not-allowed");

  // Simulate sending (1.5 second delay)
  setTimeout(() => {

    // Reset button
    btnText.textContent = "Send Request";
    btnSpinner.classList.add("hidden");
    btnArrow.classList.remove("hidden");
    submitBtn.disabled = false;
    submitBtn.classList.remove("opacity-80", "cursor-not-allowed");

    // Show success message
    successMessage.classList.remove("hidden");
    successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Reset form
    bookingForm.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 5000);

  }, 1500);

});