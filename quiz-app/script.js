const questions = [
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Liver", correct: false },
      { text: "Skin", correct: true },
      { text: "Brain", correct: false }
    ]
  },
  {
    question: "Which country is the largest by land area?",
    answers: [
      { text: "China", correct: false },
      { text: "Russia", correct: true },
      { text: "United States", correct: false },
      { text: "Canada", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "Wa", correct: false },
      { text: "H2O", correct: true },
      { text: "O2", correct: false },
      { text: "HO", correct: false }
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false },
      { text: "Paris", correct: true }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Fe", correct: false },
      { text: "Hg", correct: false }
    ]
  },
  {
    question: "Which planet is known as the 'Blue Planet'?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Earth", correct: true },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    question: "What is the smallest bone in the human body?",
    answers: [
      { text: "Stapes", correct: true },
      { text: "Femur", correct: false },
      { text: "Humerus", correct: false },
      { text: "Radius", correct: false }
    ]
  },
  {
    question: "What is the only mammal capable of sustained flight?",
    answers: [
      { text: "Bat", correct: true },
      { text: "Bird", correct: false },
      { text: "Dragonfly", correct: false },
      { text: "Penguin", correct: false }
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

