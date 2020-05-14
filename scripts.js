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
// Set variable for page scope
let currentQuestion = 0;
let responses = [];

// Handle modal display
// Add event listener to modal element
modalCloseButton.addEventListener("click", closeModal);
// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Handle displaying quiz questions
// Array of questions to pass to the questionTemplate
const questions = [
  {
    id: 1,
    text: "What is the name of Saruman's tower?",
    options: ["Barad-dûr", "Dol Guldor", "Minas Morgal", "Orthanc"],
    src: "./assets/question_1_img.jpg",
  },
  {
    id: 2,
    text: "What is the name of the main river in the Shire?",
    options: ["The Anduin", "The Brandywine", "The Greenway", "The Hobbiton"],
    src: "./assets/question_2_img.jpg",
  },
  {
    id: 3,
    text: "What is the true name of the White City of Gondor?",
    options: ["Edoras", "Minas Tirith", "Erebor", "Dunharrow"],
    src: "./assets/question_3_img.jpg",
  },
  {
    id: 4,
    text: "What creature attacked Frodo and Sam in the mountains of Mordor?",
    options: ["Nazgûl", "Spider", "Orc", "Warg"],
    src: "./assets/question_4_img.jpg",
  },
  {
    id: 4,
    text: "What beast did Gandalf defeat in the Mines of Moria?",
    options: ["Necromancer", "Dragon", "Uruk-hi", "Balrog"],
    src: "./assets/question_5_img.jpg",
  },
];

// Question Template to add to the quiz content
const questionTemplate = (currentQuestion) => {
  return `
  <div class="question__img">
    <img class="question__img-asset" src="${currentQuestion.src}"></img>
  </div>
  <div class="question__title">${currentQuestion.text}</div>
  <div class="question__options">
    <div class="question__option">${currentQuestion.options[0]}</div>
    <div class="question__option">${currentQuestion.options[1]}</div>
    <div class="question__option">${currentQuestion.options[2]}</div>
    <div class="question__option">${currentQuestion.options[3]}</div>
  </div>
`;
};

// Display the questionTemplate on the webpage

// Handle moving between questions with next and previous buttons
const handleChange = (question) => {
  switch (question) {
    case 0:
      quizContent.innerHTML = `
        <div class="question__title">
          Welcome to a quick lord of the rings quiz!
        </div>`;
      break;
    case 1:
      quizContent.innerHTML = questionTemplate(questions[0]);
      break;
    case 2:
      quizContent.innerHTML = questionTemplate(questions[1]);
      break;
    case 3:
      quizContent.innerHTML = questionTemplate(questions[2]);
      break;
    case 4:
      quizContent.innerHTML = questionTemplate(questions[3]);
      break;
    case 5:
      quizContent.innerHTML = questionTemplate(questions[4]);
      break;
    case 6:
      modal.style.display = "block";
      break;
  }
};

// Initialize switch for case 0
handleChange(currentQuestion);

// increment current question when next button is clicked
nextButton.addEventListener("click", () => {
  currentQuestion > 6
    ? (currentQuestion = 6)
    : (currentQuestion = currentQuestion + 1);
  console.log(currentQuestion);
  handleChange(currentQuestion);
  handleResponses();
});
// decrement current question when previous button is clicked
previousButton.addEventListener("click", () => {
  currentQuestion <= 0
    ? (currentQuestion = 0)
    : (currentQuestion = currentQuestion - 1);
  console.log(currentQuestion);
  handleChange(currentQuestion);
  handleResponses();
});

// Handle selecting an option for each question
function handleResponses() {
  responses = document.querySelectorAll(".question__option");
  responses.forEach((button) => {
    console.log(button.classList);
    button.addEventListener("click", setSelectedOption);
  });
}
console.log("responseButton", responses);
function setSelectedOption() {
  console.log(this);
  this.classList.add("question__option-selected");
}
