// Enhanced Mobile Menu Functionality with Overlay
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "mobile-overlay";
  document.body.appendChild(overlay);

  // Toggle menu and overlay
  function toggleMenu() {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";

    // Toggle hamburger icon
    if (navLinks.classList.contains("active")) {
      mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  }

  // Event listeners
  mobileMenuBtn.addEventListener("click", toggleMenu);

  overlay.addEventListener("click", function () {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflow = "";
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
      body.style.overflow = "";
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
});
