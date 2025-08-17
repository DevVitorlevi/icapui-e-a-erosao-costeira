document.addEventListener("DOMContentLoaded", function () {
  const loading = document.querySelector(".loading");
  if (loading) {
    setTimeout(function () {
      loading.classList.add("hidden");
    }, 1000); // Tempo da tela de loading (1s)
  }
});
