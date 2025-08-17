// Section scroll animations
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on initial load
});
