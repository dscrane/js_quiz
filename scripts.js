//  Defined DOM elements used throughout
// Previous and Next buttons
const previousButton = document.querySelector(".quiz__cta-previous");
const nextButton = document.querySelector(".quiz__cta-next");
// Modal display and interactions
const modal = document.querySelector(".results__modal");
const modalScore = document.querySelector(".results__display");
const modalCloseButton = document.querySelector(".results__modal-close");
// Quiz content
const quizContent = document.querySelector(".quiz__section-question");
// Results Display element
const resultDisplay = document.querySelector(".results__display");
// Set variable for page scope
let currentQuestion = 0;
let userAnswers = {};

// Handle displaying quiz questions
// Array of questions to pass to the questionTemplate
const questions = [
  {
    id: 0,
    value: "landing",
    text: "Welcome to a quick lord of the rings quiz!",
  },
  {
    id: 1,
    value: "4",
    text: "What is the name of Saruman's tower?",
    options: ["Barad-dûr", "Dol Guldor", "Minas Morgal", "Orthanc"],
    src: "./assets/question_1_img.jpg",
  },
  {
    id: 2,
    value: "2",
    text: "What is the name of the main river in the Shire?",
    options: ["The Anduin", "The Brandywine", "The Greenway", "The Hobbiton"],
    src: "./assets/question_2_img.jpg",
  },
  {
    id: 3,
    value: "2",
    text: "What is the true name of the White City of Gondor?",
    options: ["Edoras", "Minas Tirith", "Erebor", "Dunharrow"],
    src: "./assets/question_3_img.jpg",
  },
  {
    id: 4,
    value: "3",
    text: "What creature attacked Frodo and Sam in the mountains of Mordor?",
    options: ["Nazgûl", "Orc", "Spider", "Warg"],
    src: "./assets/question_4_img.jpg",
  },
  {
    id: 5,
    value: "4",
    text: "What beast did Gandalf defeat in the Mines of Moria?",
    options: ["Necromancer", "Dragon", "Uruk-hi", "Balrog"],
    src: "./assets/question_5_img.jpg",
  },
];

// Initialize switch for case 0
console.log(currentQuestion);
handleChange(currentQuestion);

// increment current question when next button is clicked
nextButton.addEventListener("click", () => handleNext());
// decrement current question when previous button is clicked
previousButton.addEventListener("click", () => handlePrevious());

function handleNext() {
  currentQuestion > 6
    ? (currentQuestion = 6)
    : (currentQuestion = currentQuestion + 1);

  handleChange(currentQuestion);
}

function handlePrevious() {
  if (nextButton.innerHTML === "Submit") {
    nextButton.innerHTML = "Next";
  }
  currentQuestion <= 0
    ? (currentQuestion = 0)
    : (currentQuestion = currentQuestion - 1);

  handleChange(currentQuestion);
}

// Handle moving between questions with next and previous buttons
function handleChange(question) {
  switch (question) {
    case 0:
      console.log(questions[question]);
      quizContent.innerHTML = questionTemplate(questions[0]);
      break;
    case 1:
      quizContent.innerHTML = questionTemplate(questions[1]);
      addOptionListeners();
      break;
    case 2:
      quizContent.innerHTML = questionTemplate(questions[2]);
      addOptionListeners();
      break;
    case 3:
      quizContent.innerHTML = questionTemplate(questions[3]);
      addOptionListeners();
      break;
    case 4:
      quizContent.innerHTML = questionTemplate(questions[4]);
      addOptionListeners();
      break;
    case 5:
      quizContent.innerHTML = questionTemplate(questions[5]);
      addOptionListeners();
      nextButton.innerHTML = "Submit";
      break;
    case 6:
      resultDisplay.innerHTML = calculateScore();
      modal.style.display = "block";
      break;
  }
}

// Question Template to add to the quiz content
function questionTemplate(currentQuestion) {
  if (currentQuestion.id === 0) {
    return `
    <div class="question__title">
      ${currentQuestion.text}
    </div>`;
  } else {
    return `
  <div class="question__img">
    <img class="question__img-asset" src="${currentQuestion.src}"></img>
  </div>
  <div class="question__title">${currentQuestion.text}</div>
  <div class="question__options">
    <label class="question__option">
      <input 
        class="question__radio"
        type="radio" 
        name="Question_${currentQuestion.id}" 
        value="1"
      />
      ${currentQuestion.options[0]}
    </label>
    <label class="question__option">
      <input 
        class="question__radio"
        type="radio" 
        name="Question_${currentQuestion.id}" 
        value="2"
      />
      ${currentQuestion.options[1]}
    </label>
    <label class="question__option">
      <input 
        class="question__radio"
        type="radio" 
        name="Question_${currentQuestion.id}" 
        value="3"
      />
      ${currentQuestion.options[2]}
    </label>
    <label class="question__option">
      <input 
        class="question__radio"
        type="radio" 
        name="Question_${currentQuestion.id}" 
        value="4"
      />
      ${currentQuestion.options[3]}
    </label>
  </div>
`;
  }
}

// Add event listeners for options for each question
function addOptionListeners() {
  document.querySelectorAll(".question__option").forEach((button) => {
    button.addEventListener("click", setSelectedOption);
  });
}

// Change the display of the currently selected answer
function setSelectedOption() {
  if (this.control.checked) {
    this.classList.toggle("question__option-selected");
    // Run function to collect answer from the currently selected element
    collectAnswer(this.control);
  }
  // Reset styles for unselected elements
  document.querySelectorAll(".question__option").forEach((res) => {
    if (res.classList.length > 1 && !this.control.checked) {
      res.classList.value = "question__option";
    }
  });
}

// Handle collecting the user answer
function collectAnswer(control) {
  const answerValue =
    control.value === questions[currentQuestion].value ? 1 : 0;

  userAnswers[control.name] = answerValue;
  console.log(userAnswers);
}

// Calculate the score of the quiz on submition
function calculateScore() {
  return Object.values(userAnswers).reduce((score, acc) => acc + score, 0);
}
// Handle modal display
// Add event listener to modal element
modalCloseButton.addEventListener("click", closeModal);
// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  resetGame();
}

function resetGame() {
  currentQuestion = 0;
  userAnswers = {};
  handleChange(currentQuestion);
}
