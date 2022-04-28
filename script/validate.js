/*function enableValidation(){
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); */


function enableValidation(config) { 
  const form = document.querySelector(config.formSelector);
  const imput = form.querySelectorAll(config.inputSelector);

  imput.forEach(element => {
    element.addEventListener('imput', handleFormImput);
  });

  form.addEventListener('submit', (event) => handleFormSubmit(event, form));
  
}


function handleFormSubmit(event, form) {
  event.preventDefault();
  console.log(form.checkValidity());
  if (form.checkValidity()) {
    alert('Форма валидна')
  }
  else {
   alert('Форма невалидна')
  }
}

function handleFormImput(event) {
  const input = event.target;
  const errorNode = document.querySelector(`#${input.id}-error`);
  console.log(input.validity.valid)
  if (input.validity.valid) {
    errorNode.textContent = '';
  }
  else {
    errorNode.textContent = input.validationMessage;
  }
}


function togglbutton(form, config) {
  const button = document.querySelector(config.submitButtonSelector);
  button.classList.toggl()
}



enableValidation({
  formSelector: '.popup1',
  inputSelector: '.input1'
  //submitButtonSelector: '.popup__save',
  //inactiveButtonClass: 'popup__button_disabled',
  //inputErrorClass: 'popup__input_type_error',
  //errorClass: 'popup__error_visible'
})