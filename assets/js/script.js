import { quizData } from "./questions";
const questionElement = document.getElementById("questions");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;

loadQuizApp();

function loadQuizApp() {
  const currentQuestionData = quizData[currentQuiz];
  questionElement.innerText = currentQuestionData.question;

  a_text.innerText = currentQuestionData.a;
  b_text.innerText = currentQuestionData.b;
  c_text.innerText = currentQuestionData.c;
  d_text.innerText = currentQuestionData.d;

  currentQuestionData++;
}
