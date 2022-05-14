const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuestion = 0;

loadQuizApp();

function loadQuizApp() {
  const currentQuestion = testQuestions[currentQuestion];
  questionElement.innerHTML = testQuestions[currentQuestion];
}
