const submitButton = document.querySelector(".quiz__cta");
const response = document.getElementsByClassName("quiz__answers");
const modal = document.querySelector(".results__modal");
const modalScore = document.querySelector(".results__display");
const modalCloseButton = document.querySelector(".results__modal-close");

submitButton.addEventListener("click", formSubmit);
modalCloseButton.addEventListener("click", closeModal);

function formSubmit(e) {
  e.preventDefault();

  const quizScore = calcScore(response);
  modal.style.display = "block";
  modalScore.innerHTML = `${quizScore}`;
}

function calcScore(response) {
  let score = 0;
  for (let res of response) {
    if (!res.value) return;
    score = score + parseInt(res.value);
  }
  // alert(score);
  return score;
}

function closeModal() {
  modal.style.display = "none";
}
