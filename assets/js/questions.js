const quizData = [
    {
        question: 'Which type of JavaScript language is ___',
        a: 'Object-Oriented',
        b:'Object-based',
        c:'Assembly-language',
        d:'High-level',
        correct: 'b'
    }, 
    {
        question: 'Which one of the following also known as Conditional Expression:',
        a: 'Alternative to if-else',
        b:'Switch statement',
        c:'if-then-else statement',
        d:'immediate if',
        correct: 'd'
    }, 
    {
        question: 'In JavaScript, what is a block of statement?',
        a: 'Conditional block',
        b:'block combines a number of statements into a single compound statement',
        c:'both conditional block and a single statement',
        d:'block that contains a single statement',
        correct: ''
    }, 
    {
        question: ' When interpreter encounters an empty statements, what it will do:',
        a: 'Shows a warning',
        b:'Prompts to complete the statement',
        c:'Throws the error',
        d:'Ignores the statements ',
        correct: 'd'
    }, 
    {
        question: ' The "function" and " var" are known as:',
        a: 'Keywords',
        b:'Data types',
        c:'Declaration statements',
        d:'Prototypes',
        correct: 'c'
    }
];
const questionElement = document.getElementById("questions");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById('submit');

let currentQuiz = 0;

loadQuizApp();

function loadQuizApp() {
  const currentQuestionData = quizData[currentQuiz];
  questionElement.innerText = currentQuestionData.question;

  a_text.innerText = currentQuestionData.a;
  b_text.innerText = currentQuestionData.b;
  c_text.innerText = currentQuestionData.c;
  d_text.innerText = currentQuestionData.d;
}

submitButton.addEventListener('click', () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuizApp();
    } else {
        //show Results
        alert("Done")
    }
});

