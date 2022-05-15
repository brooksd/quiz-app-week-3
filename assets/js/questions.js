const testQuestions = [
    {
        question: 'Q: JavaScript is an ____ language',
        a: 'Object-Oriented',
        b:'Object-based',
        c:'Assembly-language',
        d:'High-level',
        correct: 'a'
    }, 
    {
        question: 'Q: Which one of the following also known as Conditional Expression:',
        a: 'Alternative to if-else',
        b:'Switch statement',
        c:'if-then-else statement',
        d:'immediate if',
        correct: 'd'
    }, 
    {
        question: 'Q: In JavaScript, what is a block of statement?',
        a: 'Conditional block',
        b:'block combines a number of statements into a single compound statement',
        c:'both conditional block and a single statement',
        d:'block that contains a single statement',
        correct: ''
    }, 
    {
        question: 'Q: When interpreter encounters an empty statements, what it will do:',
        a: 'Shows a warning',
        b:'Prompts to complete the statement',
        c:'Throws the error',
        d:'Ignores the statements ',
        correct: 'd'
    }, 
    {
        question: 'Q: The "function" and " var" are known as:',
        a: 'Keywords',
        b:'Data types',
        c:'Declaration statements',
        d:'Prototypes',
        correct: 'c'
    }
];

const answersElement = document.querySelectorAll('.answer');
const questionElement = document.getElementById("questions");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuizBoard();

function loadQuizBoard() {
    deselctAnswers();

    const currentQuestionData = testQuestions[currentQuiz];
    questionElement.innerText = currentQuestionData.question;

    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;
}

function getSelected() {

    let answer = undefined;

    answersElement.forEach((answersElement) => {
        if(answersElement.checked) {
            answer = answersElement.id;
        }
    });

    return answer;
}

function deselctAnswers() {
    answersElement.forEach((answersElement) => {
        answersElement.checked = false;
    });
}

submitButton.addEventListener('click', () => {
    //checks to see the answer
    const answer = getSelected();   
    

    if (answer) {
        if(answer === testQuestions[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < testQuestions.length) {

            loadQuizBoard();

        } else {
        //show Results when done
            quiz.innerHTML = `<h2>You answered correctly ${score}/${testQuestions.length} Questions</h2> <button onclick="location.reload()"> Retry Test </button>`
        };   
    };
    
    
   

});

