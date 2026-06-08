const questions = [
   { 
    question: "NASA bevestigt: maan is officieel een hologram ",
    answers: [
        {text:'Nep', correct: true},
        {text:'Echt', correct: false},
    ]
    },
    {
        question: "Nederlands kabinet trekt 2 miljard uit voor onderwijshervorming ",
    answers: [
        {text:'Nep', correct: false},
        {text:'Echt', correct: true},
    ]
    },
    {
        question: "Drink elke ochtend citroenwater en je hoeft NOOIT meer naar de dokter ",
    answers: [
        {text:'Nep', correct: true},
        {text:'Echt', correct: false},
    ]
    },
    {
        question: "KNMI: 2025 was warmste jaar ooit gemeten in Nederland ",
    answers: [
        {text:'Nep', correct: false},
        {text:'Echt', correct: true},
    ]
    },
        {
        question: "AI-foto van paus in witte donsjas gaat viral als 'echt' ",
    answers: [
        {text:'Nep', correct: true},
        {text:'Echt', correct: false},
    ]
    },
    
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; 
let score = 0; 

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Volgende vraag"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn1");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
 
 
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
 
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
 
    });
    nextButton.style.display = "block";
}
 
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${ questions.length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}
 
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
 
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
       startQuiz();
    }
});
 
startQuiz();
 

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);