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

// ========================
// FOOTER — Current Year
// ========================
document.getElementById("current-year").textContent = new Date().getFullYear();


// ========================
// NEWSLETTER FORM HANDLER
// ========================
const newsletterForm = document.getElementById("newsletter-form");
const newsletterSuccess = document.getElementById("newsletter-success");

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Show success
  newsletterSuccess.classList.remove("hidden");

  // Reset form
  newsletterForm.reset();

  // Hide after 4 seconds
  setTimeout(() => {
    newsletterSuccess.classList.add("hidden");
  }, 4000);
});

// ========================
// SCROLL REVEAL ANIMATION
// ========================
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-scale"
);

function checkReveal() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

// Check on scroll
window.addEventListener("scroll", checkReveal);

// Check on page load (for elements already visible)
window.addEventListener("load", checkReveal);
// ========================
// ACTIVE NAV LINK ON SCROLL
// ========================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function activateNavLink() {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      // Remove active from all links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add active to matching link
      const activeLink = document.querySelector(
        '.nav-link[href="#' + sectionId + '"]'
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", activateNavLink);
window.addEventListener("load", activateNavLink);