 import { quizData } from "/js/content.js";

// Declaracao de variaveis para localizacao de partes do HTML
const questionScene = document.querySelector(".quiz-scene");
const quiz = document.querySelector(".quiz-container");
const questionElement = document.querySelector(".quiz-header");
const answerElements = document.querySelectorAll(".answer");
const questionNumber = document.querySelector("title");

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


// Botao para mudar a pergunta
const submitButton = document.getElementById("submit");

// Variaveis para o timer
const display = document.querySelector(".timer");
let timer;

// Variaveis que contam qual a questao atual e quantos pontos marcados
let currentQuiz = 0;
let score = 0;

// Funcao para deselecionar as repostas
const deselectAnswers = () => {
  // Inicio da funcao
  answerElements.forEach((answer) => (answer.checked = false));
};
// Fim da funcao

// Funcao para armazenar qual resposta foi marcada
const getSelected = () => {
  // Inicio da funcao
  let answer;

  answerElements.forEach((answerElements) => {
    if (answerElements.checked) {
      answer = answerElements.id;
    }
  });

  return answer;
};
// Fim da funcao

// Funcao que carrega a pergunta e as respostas do quiz
const loadQuiz = () => {
  // Inicio da funcao
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionNumber.innerHTML = `STN - Fase ${currentQuiz + 1}`; // Muda o titulo da pagina de acordo com o numero da questao
  questionScene.innerHTML = `<img src="${currentQuizData.scene}"/>`; // Troca a imagem da cena de acordo com a cena
  questionElement.innerHTML = currentQuizData.question; // Carrega a pergunta

  // Carrega as repostas para a pergunta
  a_text.innerText = currentQuizData.answer.a;
  b_text.innerText = currentQuizData.answer.b;
  c_text.innerText = currentQuizData.answer.c;
  d_text.innerText = currentQuizData.answer.d;
  e_text.innerText = currentQuizData.answer.e;
  f_text.innerText = currentQuizData.answer.f;
  g_text.innerText = currentQuizData.answer.g;
  h_text.innerText = currentQuizData.answer.h;
  i_text.innerText = currentQuizData.answer.i;
  j_text.innerText = currentQuizData.answer.j;
 

};
// Fim da funcao

