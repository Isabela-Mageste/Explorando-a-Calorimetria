import { data } from "/js/content.js";

// Declaracao de variaveis para localizacao de partes do HTML
const page = document.querySelector(".page");
const titulo = document.querySelector(".titulo");
const figura = document.querySelector(".figura");
const resumo = document.querySelector(".resumo");
const item = document.querySelectorAll(".item");
const procedimentoText = document.querySelector(".procedimento");
const video = document.querySelector(".video-wrapper");

// Declaracao de variaveis para localizacao das respostas
// const a_text = document.getElementById("text_a");
// const b_text = document.getElementById("text_b");
// const c_text = document.getElementById("text_c");
// const d_text = document.getElementById("text_d");
// const e_text = document.getElementById("text_e");
// const f_text = document.getElementById("text_f");
// const g_text = document.getElementById("text_g");
// const h_text = document.getElementById("text_h");
// const i_text = document.getElementById("text_i");
// const j_text = document.getElementById("text_j");

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function loadPage(selectedPage) {
  const currentData = data[selectedPage];

  titulo.innerHTML = currentData.titulo;
  figura.innerHTML = `<img src="${currentData.figura}"/>`; // Troca a imagem da cena de acordo com a cena
  resumo.innerHTML = currentData.resumo;

  // Loop para carregar as respostas para a pergunta
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

  procedimentoText.innerHTML = currentData.procedimento;

  video.innerHTML = `<iframe src="${currentData.video}"/>`;
}
// Fim da funcao

loadPage(getParameterByName("experimento"));