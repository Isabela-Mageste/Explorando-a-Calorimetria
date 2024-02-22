import { data } from "/js/content.js";

// Declaracao de variaveis para localizacao de partes do HTML
const page = document.querySelector(".page");
const titulo = document.querySelector(".titulo");
const figura = document.querySelector(".figura");
const resumo = document.querySelector(".resumo");
const item = document.querySelectorAll(".item");
const procedimentoText = document.querySelector(".procedimento");
const video = document.querySelector(".video-wrapper");

// Funcao que retorna o valor de um parametro na URL para carregar os dados da pagina
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    
  if (!results) return null;
  if (!results[2]) return "";

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Funcao que carrega os dados da paginas
function loadPage(selectedPage) {
  // Pega os dados da pagina atual de dentro do objeto data
  const currentData = data[selectedPage];

  // Atualiza o titulo, a imagem, o resumo da pagina
  titulo.innerHTML = currentData.titulo;
  figura.innerHTML = `<img src="${currentData.figura}" style="max-width: 25vw" />`; // Se não colocar o style com max-width a formatação buga
  resumo.innerHTML = currentData.resumo;

  // Loop para carregar os dados da checklist
  const items = Object.keys(currentData.item);
  items.forEach((key) => {
    const element = document.getElementById(key);
    const textElement = document.getElementById(`text_${key}`);

    if (element && textElement) {
      const value = currentData.item[key];
      if (value === "" || value === null) {
        element.style.display = "none";
        textElement.style.display = "none";
      } else {
        textElement.innerText = value;
      }
    }
  });

  // Atualiza o texto de procedimento
  procedimentoText.innerHTML = currentData.procedimento;

  // Atualiza o iframe com o video correto
  video.innerHTML = `<iframe src="${currentData.video}"/>`;
}

loadPage(getParameterByName("experimento"));