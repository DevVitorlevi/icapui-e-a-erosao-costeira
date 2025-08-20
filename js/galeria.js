// Dados da galeria - imagens
const images = [
  {
    id: "image001",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 1",
  },
  {
    id: "image002",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 2",
  },
  {
    id: "image003",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 3",
  },
  {
    id: "image005",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 5",
  },
  {
    id: "image006",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 6",
  },
  {
    id: "image008",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 8",
  },
  {
    id: "image010",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 10",
  },
  {
    id: "image011",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 11",
  },
  {
    id: "image012",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 12",
  },
  {
    id: "image013",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 13",
  },
  {
    id: "image014",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 14",
  },
  {
    id: "image015",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 15",
  },
  {
    id: "image016",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 16",
  },
  {
    id: "image017",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 17",
  },
  {
    id: "image019",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 19",
  },
  {
    id: "image020",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 20",
  },
  {
    id: "image021",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 21",
  },
  {
    id: "image022",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 22",
  },
  {
    id: "image029",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 29",
  },
  {
    id: "image030",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 30",
  },
  {
    id: "image032",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 32",
  },
  {
    id: "image033",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 33",
  },
  {
    id: "image034",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 34",
  },
  {
    id: "image036",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 36",
  },
  {
    id: "image038",
    title: "Erosão Costeira 1",
    description: "Região de Icapuí - Área 38",
  },

  {
    id: "image039",
    title: "Erosão Costeira 2",
    description: "Região de Icapuí - Área 39",
  },
  {
    id: "image041",
    title: "Erosão Costeira 4",
    description: "Região de Icapuí - Área 41",
  },
  {
    id: "image042",
    title: "Erosão Costeira 5",
    description: "Região de Icapuí - Área 42",
  },
  {
    id: "image043",
    title: "Erosão Costeira 6",
    description: "Região de Icapuí - Área 43",
  },
  {
    id: "image044",
    title: "Erosão Costeira 7",
    description: "Região de Icapuí - Área 44",
  },
  {
    id: "image045",
    title: "Erosão Costeira 8",
    description: "Região de Icapuí - Área 45",
  },
  {
    id: "image046",
    title: "Erosão Costeira 9",
    description: "Região de Icapuí - Área 46",
  },
  {
    id: "image048",
    title: "Erosão Costeira 11",
    description: "Região de Icapuí - Área 48",
  },
  {
    id: "image049",
    title: "Erosão Costeira 12",
    description: "Região de Icapuí - Área 49",
  },
  {
    id: "image050",
    title: "Erosão Costeira 13",
    description: "Região de Icapuí - Área 50",
  },
  {
    id: "image051",
    title: "Erosão Costeira 14",
    description: "Região de Icapuí - Área 51",
  },
  {
    id: "image052",
    title: "Erosão Costeira 15",
    description: "Região de Icapuí - Área 52",
  },
  {
    id: "image054",
    title: "Erosão Costeira 17",
    description: "Região de Icapuí - Área 54",
  },
  {
    id: "image055",
    title: "Erosão Costeira 18",
    description: "Região de Icapuí - Área 55",
  },
  {
    id: "image056",
    title: "Erosão Costeira 19",
    description: "Região de Icapuí - Área 56",
  },
  {
    id: "image057",
    title: "Erosão Costeira 20",
    description: "Região de Icapuí - Área 57",
  },
  {
    id: "image058",
    title: "Erosão Costeira 21",
    description: "Região de Icapuí - Área 58",
  },
  {
    id: "image059",
    title: "Erosão Costeira 22",
    description: "Região de Icapuí - Área 59",
  },
  {
    id: "image060",
    title: "Erosão Costeira 23",
    description: "Região de Icapuí - Área 60",
  },
  {
    id: "image062",
    title: "Erosão Costeira 24",
    description: "Região de Icapuí - Área 62",
  },
  {
    id: "image063",
    title: "Erosão Costeira 25",
    description: "Região de Icapuí - Área 63",
  },
  {
    id: "image064",
    title: "Erosão Costeira 26",
    description: "Região de Icapuí - Área 64",
  },
  {
    id: "image065",
    title: "Erosão Costeira 27",
    description: "Região de Icapuí - Área 65",
  },
  {
    id: "image066",
    title: "Erosão Costeira 28",
    description: "Região de Icapuí - Área 66",
  },
  {
    id: "image067",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image068",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image069",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image070",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image071",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image072",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image073",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image074",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image075",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image076",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image077",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image078",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image079",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image080",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image081",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image082",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image083",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image084",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image085",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image086",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image087",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image088",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image089",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image090",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image091",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image092",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image093",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
  {
    id: "image094",
    title: "Erosão Costeira 29",
    description: "Região de Icapuí - Área 67",
  },
];

// Dados da galeria - vídeos
const videos = [
  {
    id: "video095",
    title: "Vídeo Erosão 1",
    description: "Região de Icapuí - Vídeo 1",
  },
  {
    id: "video096",
    title: "Vídeo Erosão 3",
    description: "Região de Icapuí - Vídeo 3",
  },
  {
    id: "video097",
    title: "Vídeo Erosão 4",
    description: "Região de Icapuí - Vídeo 4",
  },
];

// Estado da aplicação
let currentItems = [];
let currentIndex = 0;
let activeFilter = "all";

// Elementos DOM
const galleryElement = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalCaption = document.getElementById("modal-caption");
const closeModalBtn = document.getElementById("modal-close");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const filterButtons = document.querySelectorAll(".filter-btn");

// Inicializar a galeria
function initGallery() {
  renderGallery();
  setupEventListeners();
}

// Renderizar a galeria com base no filtro ativo
function renderGallery() {
  galleryElement.innerHTML = "";
  currentItems = [];

  // Adicionar imagens se o filtro for 'all' ou 'image'
  if (activeFilter === "all" || activeFilter === "image") {
    images.forEach((image, index) => {
      const itemElement = createImageElement(image, index);
      galleryElement.appendChild(itemElement);
      currentItems.push({
        type: "image",
        data: image,
        index: currentItems.length,
      });
    });
  }

  // Adicionar vídeos se o filtro for 'all' ou 'video'
  if (activeFilter === "all" || activeFilter === "video") {
    videos.forEach((video, index) => {
      const itemElement = createVideoElement(video, index);
      galleryElement.appendChild(itemElement);
      currentItems.push({
        type: "video",
        data: video,
        index: currentItems.length,
      });
    });
  }
}

// Criar elemento de imagem
function createImageElement(image, index) {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.dataset.index = index;

  item.innerHTML = `
                <img src="../assets/images/${image.id}.jpeg" alt="${image.title}">
                <div class="item-info">
                    <h3>${image.title}</h3>
                    <p>${image.description}</p>
                </div>
            `;

  return item;
}

// Criar elemento de vídeo
function createVideoElement(video, index) {
  const item = document.createElement("div");
  item.className = "gallery-item video";
  item.dataset.index = index;

  item.innerHTML = `
                <img src="../assets/videos/video${video.id}.mp4" alt="${video.title}">
                <div class="item-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            `;

  return item;
}

// Abrir modal com o item selecionado
function openModal(index) {
  currentIndex = index;
  const item = currentItems[index];

  if (item.type === "image") {
    modalContent.innerHTML = `<img src="../assets/images/${item.data.id}.jpeg" alt="${item.data.title}">`;
  } else {
    modalContent.innerHTML = `
                    <video controls autoplay>
                        <source src="../assets/videos/${item.data.id}.mp4" type="video/mp4">
                        Seu navegador não suporta vídeos HTML5.
                    </video>
                `;
  }

  modalCaption.textContent = `${item.data.title} - ${item.data.description}`;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Fechar o modal
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";

  // Pausar vídeo quando o modal for fechado
  const video = modalContent.querySelector("video");
  if (video) {
    video.pause();
  }
}

// Navegar para o item anterior
function prevItem() {
  currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
  openModal(currentIndex);
}

// Navegar para o próximo item
function nextItem() {
  currentIndex = (currentIndex + 1) % currentItems.length;
  openModal(currentIndex);
}

// Configurar event listeners
function setupEventListeners() {
  // Clique nos itens da galeria
  galleryElement.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item) {
      const index = parseInt(item.dataset.index);
      openModal(index);
    }
  });

  // Fechar modal
  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Navegação no modal
  prevBtn.addEventListener("click", prevItem);
  nextBtn.addEventListener("click", nextItem);

  // Teclado para navegação
  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active")) {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevItem();
      if (e.key === "ArrowRight") nextItem();
    }
  });

  // Filtros
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      // Atualizar botão ativo
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Atualizar filtro e renderizar
      activeFilter = filter;
      renderGallery();
    });
  });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", initGallery);
