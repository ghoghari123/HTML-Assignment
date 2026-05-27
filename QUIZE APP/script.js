const quizQuestions = [
    {
        question: "What is JavaScript?",
        options: ["Programming Language", "Database", "Server", "OS"],
        answer: "Programming Language"
    },
    {
        question: "Which keyword is used for variable?",
        options: ["int", "var", "string", "float"],
        answer: "var"
    },
    {
        question: "Which is used for DOM selection?",
        options: ["getElementById", "query", "select", "find"],
        answer: "getElementById"
    },
    {
        question: "Which event occurs when a button is clicked?",
        options: ["onchange", "onclick", "onhover", "onmouse"],
        answer: "onclick"
    },
    {
        question: "Which function is used to display output in console?",
        options: ["print()", "console.log()", "write()", "display()"],
        answer: "console.log()"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "<!-- -->", "**"],
        answer: "//"
    },
    {
        question: "Which method adds an element to the end of array?",
        options: ["push()", "pop()", "shift()", "slice()"],
        answer: "push()"
    },
    {
        question: "Which method removes the last element of array?",
        options: ["push()", "shift()", "pop()", "concat()"],
        answer: "pop()"
    },
    {
        question: "What is the index of first array element?",
        options: ["0", "1", "-1", "null"],
        answer: "0"
    },
    {
        question: "Which property gives array length?",
        options: ["size", "count", "length", "index"],
        answer: "length"
    },
    {
        question: "Which event occurs when keyboard key is pressed?",
        options: ["onclick", "onkeypress", "onchange", "onsubmit"],
        answer: "onkeypress"
    },
    {
        question: "Which method is used to attach event listener?",
        options: ["attach()", "addEventListener()", "event()", "listen()"],
        answer: "addEventListener()"
    },
    {
        question: "Which HTML attribute makes field mandatory?",
        options: ["required", "validate", "must", "needed"],
        answer: "required"
    },
    {
        question: "Which input type validates email automatically?",
        options: ["mail", "email", "text", "validate"],
        answer: "email"
    },
    {
        question: "Which function checks invalid number?",
        options: ["isNaN()", "Number()", "parseInt()", "checkNum()"],
        answer: "isNaN()"
    },
    {
        question: "Which function executes code after delay?",
        options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
        answer: "setTimeout()"
    },
    {
        question: "Which function repeats code continuously?",
        options: ["repeat()", "setTimeout()", "setInterval()", "loop()"],
        answer: "setInterval()"
    },
    {
        question: "How to stop setInterval()?",
        options: ["stopInterval()", "clearInterval()", "removeInterval()", "endInterval()"],
        answer: "clearInterval()"
    },
    {
        question: "Time in setTimeout() is measured in?",
        options: ["seconds", "minutes", "milliseconds", "hours"],
        answer: "milliseconds"
    },
    {
        question: "Which method combines arrays?",
        options: ["merge()", "join()", "concat()", "append()"],
        answer: "concat()"
    },
    {
        question: "Which method converts array to string?",
        options: ["slice()", "splice()", "join()", "push()"],
        answer: "join()"
    },
    {
        question: "Which method removes first array element?",
        options: ["shift()", "pop()", "push()", "slice()"],
        answer: "shift()"
    },
    {
        question: "Which statement is used for condition checking?",
        options: ["for", "if", "while", "switch"],
        answer: "if"
    },
    {
        question: "Which operator checks equality and type?",
        options: ["=", "==", "===", "!="],
        answer: "==="
    },
    {
        question: "Which method prevents default form submission?",
        options: ["stop()", "preventDefault()", "cancel()", "removeDefault()"],
        answer: "preventDefault()"
    }
];

if (!localStorage.getItem("questions")) {
    localStorage.setItem("questions", JSON.stringify(quizQuestions));
}

const questions = JSON.parse(localStorage.getItem("questions")) || quizQuestions;

let currentIndex = Number(localStorage.getItem("currentIndex")) || 0;
let score = Number(localStorage.getItem("score")) || 0;
let answered = false;

let timer = null;
let overallTimer = null;

let questionTime = 60;
const totalQuizTime = 25 * 60;
let overallTime = Number(localStorage.getItem("overallTime")) || totalQuizTime;
let wrongAnswers = JSON.parse(localStorage.getItem("wrongAnswers")) || [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const overallTimerEl = document.getElementById("overall-timer");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

function saveQuizData() {
    localStorage.setItem("currentIndex", currentIndex);
    localStorage.setItem("score", score);
    localStorage.setItem("overallTime", overallTime);
    localStorage.setItem("wrongAnswers", JSON.stringify(wrongAnswers));
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function loadQuestion() {
    clearInterval(timer);
    answered = false;
    questionTime = 60;

    if (currentIndex >= questions.length) {
        showResult();
        return;
    }

    const currentQ = questions[currentIndex];
    questionEl.innerText = `Q${currentIndex + 1}. ${currentQ.question}`;
    optionsEl.innerHTML = "";
    timerEl.innerText = "Question Time Left: " + questionTime;

    currentQ.options.forEach(option => {
        const btn = document.createElement("div");
        btn.innerText = option;
        btn.classList.add("option");
        btn.addEventListener("click", () => selectAnswer(option));
        optionsEl.appendChild(btn);
    });

    startQuestionTimer();
}

function selectAnswer(selected) {
    if (answered) return;

    answered = true;
    clearInterval(timer);

    const correct = questions[currentIndex].answer;

    if (selected === correct) {
        score++;
    } else {
        wrongAnswers.push({
            question: questions[currentIndex].question,
            selected: selected,
            correct: correct
        });
    }

    saveQuizData();

    setTimeout(() => {
        nextQuestion();
    }, 500);
}

function nextQuestion() {
    currentIndex++;
    saveQuizData();

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function startQuestionTimer() {
    timer = setInterval(() => {
        questionTime--;
        timerEl.innerText = "Question Time Left: " + questionTime;

        if (questionTime <= 0) {
            clearInterval(timer);

            wrongAnswers.push({
                question: questions[currentIndex].question,
                selected: "No Answer",
                correct: questions[currentIndex].answer
            });

            saveQuizData();
            nextQuestion();
        }
    }, 1000);
}

function startOverallTimer() {
    clearInterval(overallTimer);

    overallTimer = setInterval(() => {
        overallTime--;
        overallTimerEl.innerText = `Overall Time Left: ${formatTime(overallTime)}`;
        saveQuizData();

        if (overallTime <= 0) {
            clearInterval(overallTimer);
            clearInterval(timer);
            showResult();
        }
    }, 1000);
}

function showResult() {
    clearInterval(timer);
    clearInterval(overallTimer);

    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");

    document.getElementById("overall-timer").style.display = "none";
    document.getElementById("timer").style.display = "none";

    document.getElementById("totalQuestions").innerText = questions.length;
    document.getElementById("score").innerText = score;
    document.getElementById("wrongCount").innerText = wrongAnswers.length;

    const usedTime = totalQuizTime - overallTime;
    document.getElementById("QuizTimeComleted").innerText = formatTime(usedTime);

    const wrongList = document.getElementById("wrongAnswers");
    wrongList.innerHTML = "";

    wrongAnswers.forEach((item, index) => {
        wrongList.innerHTML += `
            <div class="wrong-item">
                <p><b>${index + 1}. ${item.question}</b></p>
                <p>Your Answer: ${item.selected}</p>
                <p>Correct Answer: ${item.correct}</p>
                <hr>
            </div>
        `;
    });
}

function restartQuiz() {
    localStorage.removeItem("currentIndex");
    localStorage.removeItem("score");
    localStorage.removeItem("overallTime");
    localStorage.removeItem("wrongAnswers");

    currentIndex = 0;
    score = 0;
    wrongAnswers = [];
    overallTime = totalQuizTime;

    quizBox.classList.remove("hide");
    resultBox.classList.add("hide");

    document.getElementById("overall-timer").style.display = "block";
    document.getElementById("timer").style.display = "block";

    loadQuestion();
    startOverallTimer();
}

nextBtn.addEventListener("click", () => {
    nextQuestion();
});

loadQuestion();
startOverallTimer();