const questions = [
  {
    question: "What is 10 + 10?",
    answers: [
      { text: "20", correct: true },
      { text: "30", correct: false },
      { text: "40", correct: false },
      { text: "50", correct: false }
    ]
  },
  {
    question: "What is 20 - 10?",
    answers: [
      { text: "10", correct: true },
      { text: "20", correct: false },
      { text: "30", correct: false },
      { text: "40", correct: false }
    ]
  },
  {
    question: "What is 10 * 10?",
    answers: [
      { text: "100", correct: true },
      { text: "200", correct: false },
      { text: "300", correct: false },
      { text: "400", correct: false }
    ]
  },
  {
    question: "What is 10 / 10?",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false }
    ]
  }
];

const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion(questions[currentQuestionIndex]);
}

function resetState() {
  nextButton.style.display = "none";
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild);
  }
}


function showQuestion(question) {
  resetState();
  let currentQuestion = question
  let questionNo = currentQuestionIndex + 1;
  questionContainer.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    score++;
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answersContainer.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function nextQues() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResult();
  }
}


function showResult() {
  resetState();
  questionContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerText = "Restart";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", startQuiz);

}

startQuiz();

