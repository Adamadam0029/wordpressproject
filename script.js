document.addEventListener("DOMContentLoaded", function () {
    "use strict";

  
    const clockElement = document.getElementById("clock");

    function updateClock() {
        if (!clockElement) return;
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    if (clockElement) {
        updateClock();
        setInterval(updateClock, 1000);
    }


    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");


    if (!questionElement || !answerButtons || !nextButton) {
        return;
    }

    const questions = [
        {
            question: "NASA bevestigt: maan is officieel een hologram",
            answers: [
                { text: "Nep", correct: true },
                { text: "Echt", correct: false },
            ],
        },
        {
            question: "Nederlands kabinet trekt 2 miljard uit voor onderwijshervorming",
            answers: [
                { text: "Nep", correct: false },
                { text: "Echt", correct: true },
            ],
        },
        {
            question: "Drink elke ochtend citroenwater en je hoeft NOOIT meer naar de dokter",
            answers: [
                { text: "Nep", correct: true },
                { text: "Echt", correct: false },
            ],
        },
        {
            question: "KNMI: 2025 was warmste jaar ooit gemeten in Nederland",
            answers: [
                { text: "Nep", correct: false },
                { text: "Echt", correct: true },
            ],
        },
        {
            question: "AI-foto van paus in witte donsjas gaat viral als 'echt'",
            answers: [
                { text: "Nep", correct: true },
                { text: "Echt", correct: false },
            ],
        },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.textContent = "Volgende vraag";
        showQuestion();
    }

    function showQuestion() {
        resetState();
        const currentQuestion = questions[currentQuestionIndex];
        const questionNo = currentQuestionIndex + 1;
        questionElement.textContent = `${questionNo}. ${currentQuestion.question}`;

        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = answer.text;
            button.classList.add("btn1");
            button.dataset.correct = answer.correct;
            button.addEventListener("click", selectAnswer);
            answerButtons.appendChild(button);
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

        Array.from(answerButtons.children).forEach((button) => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });

        nextButton.style.display = "block";
    }

    function showScore() {
        resetState();
        questionElement.textContent = `Je hebt ${score} van de ${questions.length} goed!`;
        nextButton.textContent = "Opnieuw spelen";
        nextButton.style.display = "block";
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });

    startQuiz();
});