 import { quizData } from "/js/content.js";

// Declaracao de variaveis para localizacao de partes do HTML
const titulo = document.querySelector(".titulo");
const figura = document.querySelector(".figura");
const resumo = document.querySelector("resumo");
const item = document.querySelectorAll(".item");
const procedimento = document.querySelector(".procedimento");
const video = document.querySelector(".video");

// Declaracao de variaveis para localizacao das respostas
const a_text = document.getElementById("text_a");
const b_text = document.getElementById("text_b");
const c_text = document.getElementById("text_c");
const d_text = document.getElementById("text_d");
const e_text = document.getElementById("text_e");
const f_text = document.getElementById("text_f");
const g_text = document.getElementById("text_g");
const h_text = document.getElementById("text_h");
const i_text = document.getElementById("text_i");
const j_text = document.getElementById("text_j");


// if-else que redireciona para as páginas 
//const submitButton = document.getElementById("submit");

function linkPressionado(numero) {
  const selectedPage = 0;
}

// Funcao que carrega a pergunta e as respostas do quiz
const loadPage = () => {
  // Inicio da funcao

  const currentData = quizData[selectedPage];

  titulo.innerHTML = currentData.titulo;
  figura.innerHTML = `<img src="${currentData.figura}"/>`; // Troca a imagem da cena de acordo com a cena
  resumo.innerHTML = currentData.resumo; 

  // Carrega as repostas para a pergunta
  a_text.innerText = currentData.item.a;
  b_text.innerText = currentData.item.b;
  c_text.innerText = currentData.item.c;
  d_text.innerText = currentData.item.d;
  e_text.innerText = currentData.item.e;
  f_text.innerText = currentData.item.f;
  g_text.innerText = currentData.item.g;
  h_text.innerText = currentData.item.h;
  i_text.innerText = currentData.item.i;
  j_text.innerText = currentData.item.j;
 
  procedimento.innerHTML = currentData.procedimento;

  video.innerHTML = `<iframe src="${currentData.video}"/>`;

};
// Fim da funcao

