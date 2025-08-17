document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function onScroll() {
    let scrollPos = window.scrollY + 120; // compensação para header fixo
    let current = "";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        current = section.getAttribute("id");
      }
    });

    // 🔧 Se não encontrou nenhuma (fim da página), força a última section
    if (!current) {
      current = sections[sections.length - 1].getAttribute("id");
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // executa no load
});
