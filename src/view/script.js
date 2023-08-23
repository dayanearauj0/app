document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("navbarToggleBtn");
    const menu = document.getElementById("navbarNav");
  
    toggleButton.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  });
  
  const cardProjetos = document.getElementById("div-projetos");
  
  async function fetchProjetos() {
    // const response = await fetch("http://localhost:2727/projetos");
    const response = await fetch("../models/projeto.json");
    const projetos = await response.json();
    return projetos;
  }
  
  function renderProjeto(projeto) {
    cardProjetos.innerHTML = "";
  
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
  
    projeto.forEach((imagem) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-12", "col-sm-6", "col-md-4", "div-card");
  
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-link", imagem.link); 
      
      card.addEventListener("click", () => {
        const link = card.getAttribute("data-link");
        window.location.href = link; 
      });
  
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
  
      const imgElement = document.createElement("img");
      imgElement.src = imagem.imagem;
      imgElement.alt = imagem.titulo;
      imgElement.classList.add("card");
  
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
  
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("project-content");
  
      const tituloDiv = document.createElement("h2");
      tituloDiv.classList.add("titulo");
      tituloDiv.textContent = imagem.titulo;
  
      const descricaoDiv = document.createElement("p");
      descricaoDiv.classList.add("descricao");
      descricaoDiv.textContent = imagem.descricao;
  
      const tecnologiasDiv = document.createElement("p");
      tecnologiasDiv.classList.add("tecnologias");
      tecnologiasDiv.textContent =
        "Tecnologias: " + imagem.tecnologias.join(", ");
  
      contentDiv.appendChild(tituloDiv);
      contentDiv.appendChild(descricaoDiv);
      contentDiv.appendChild(tecnologiasDiv);
  
      overlay.appendChild(contentDiv);
  
      imageContainer.appendChild(imgElement);
      imageContainer.appendChild(overlay);
  
      card.appendChild(imageContainer);
  
      colDiv.appendChild(card);
  
      rowDiv.appendChild(colDiv);
    });
  
    cardProjetos.appendChild(rowDiv);
  }
  
  async function init() {
    try {
      const projetos = await fetchProjetos();
      renderProjeto(projetos);
    } catch (error) {
      console.error("Erro ao carregar projetos:", error);
    }
  }
  
  init();