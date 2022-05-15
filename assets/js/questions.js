let testQuestions = [
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
        correct: 'b'
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
    },
    {
        question: 'Q: How do you declare variables?',
        a:'let',
        b:'var',
        c:'A & B',
        d:'none of the above',
        correct: 'c'
    }
];

let $ = document;

const answersElement = $.querySelectorAll('.answer');
const questionElement = $.getElementById("questions");
const quiz = $.getElementById("quiz");
const a_text = $.getElementById("a_text");
const b_text = $.getElementById("b_text");
const c_text = $.getElementById("c_text");
const d_text = $.getElementById("d_text");
const submitButton = $.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let timeLeft = 20;

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
// Setting up the countdown timer

var timer = $.getElementById('timer');

function decrementSeconds() {
    timeLeft -= 1;
    timer.innerText =  timeLeft;

    if (timeLeft < 10) {
        timer.innerHTML = '0' + timeLeft
    };
    
    
}

var cancel = setInterval(decrementSeconds, 1000);


// loops between the Questions 

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
       
        let result = `${score}/${testQuestions.length}`;


        if(currentQuiz < testQuestions.length) {

            loadQuizBoard();

        } else {
        //show Results when done
            quiz.innerHTML = `<h3>You answered correctly ${result} Questions</h3>
            <button onclick="location.reload()"> Retry Test </button>`
        };
        
    };
    
   

});





