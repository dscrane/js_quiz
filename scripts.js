//const submitButton = document.querySelector(".quiz__cta");
const response = document.getElementsByClassName("quiz__answers");
const modal = document.querySelector(".results__modal");
const modalScore = document.querySelector(".results__display");
const modalCloseButton = document.querySelector(".results__modal-close");

//submitButton.addEventListener("click", formSubmit);
modalCloseButton.addEventListener("click", closeModal);

function formSubmit(e) {
  e.preventDefault();

  const quizScore = calcScore(response);
  modal.style.display = "block";
  modalScore.innerHTML = `${quizScore}`;
  console.log(this.state);
}

function calcScore(response) {
  let score = 0;
  for (let res of response) {
    if (!res.value) return;
    score = score + parseInt(res.value);
  }

  return score;
}

function closeModal() {
  modal.style.display = "none";
}

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

console.log(questions);

const questionTemplate = `
  <div class="question__img">
    <img class="question__img-asset" src="${questions[2].src}"></img>
  </div>
  <div class="question__title">${questions[2].text}</div>
  <div class="question__options">
    <div class="question__option">${questions[2].options[0]}</div>
    <div class="question__option">${questions[2].options[1]}</div>
    <div class="question__option">${questions[2].options[2]}</div>
    <div class="question__option">${questions[2].options[3]}</div>
  </div>
`;

console.log(questionTemplate);

document.querySelector(".quiz__section-question").innerHTML = questionTemplate;
