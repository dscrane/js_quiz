const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener("click", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  console.log(e);
  const valOne = this.querySelector('input[type="radio"]').value;

  console.log(valOne);
}
