const quizData = [
{
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "High Text Machine Language",
    c: "Hyper Transfer Markup Language",
    d: "Home Tool Markup Language",
    correct: "a"
},
{
    question: "Which language is used for styling web pages?",
    a: "HTML",
    b: "JQuery",
    c: "CSS",
    d: "XML",
    correct: "c"
},
{
    question: "Which language is used for web programming?",
    a: "Java",
    b: "Python",
    c: "C++",
    d: "JavaScript",
    correct: "d"
},
{
    question: "Inside which HTML element do we put JavaScript?",
    a: "<js>",
    b: "<script>",
    c: "<javascript>",
    d: "<code>",
    correct: "b"
},
{
    question: "Which company developed JavaScript?",
    a: "Microsoft",
    b: "Google",
    c: "Netscape",
    d: "Apple",
    correct: "c"
}
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentData = quizData[currentQuiz];

    questionEl.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

function getSelected() {
    const answers = document.querySelectorAll("input[name='answer']");
    let answer = undefined;

    answers.forEach(ans => {
        if(ans.checked) {
            answer = ans.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    const answers = document.querySelectorAll("input[name='answer']");
    answers.forEach(ans => {
        ans.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if(answer) {

        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById("quiz").innerHTML =
                `<h2>Your Score: ${score}/${quizData.length}</h2>
                 <button onclick="location.reload()">Restart Quiz</button>`;
        }
    }
});