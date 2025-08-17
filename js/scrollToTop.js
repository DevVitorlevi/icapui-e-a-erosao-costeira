// Scroll to top button
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("visible");
      document.getElementById("header").classList.add("header-scrolled");
    } else {
      scrollToTopBtn.classList.remove("visible");
      document.getElementById("header").classList.remove("header-scrolled");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
