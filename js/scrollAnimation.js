document.addEventListener("DOMContentLoaded", () => {
  const animateGroup = (selector, options = {}) => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (options.stagger) {
              elements.forEach((el, i) => {
                setTimeout(
                  () => el.classList.add("visible"),
                  i * (options.stagger || 150)
                );
              });
            } else {
              entry.target.classList.add("visible");
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold || 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  };

  // Textos H1/H2/H3 - fade-up mais lento
  animateGroup("h1, h2, h3", { stagger: 200 });

  // Cards - delay moderado
  animateGroup(".cards-grid .card", { stagger: 200 });

  // Timeline - animação mais lenta, delay sequencial maior
  animateGroup(".timeline-item", { stagger: 500 });

  // Imagens - zoom suave
  animateGroup(".section-image");

  // Dados chave
  animateGroup(".stats-grid .stat-item", { stagger: 200 });

  // Atividades turismo
  animateGroup(".atividades .atividade", { stagger: 150 });
});
