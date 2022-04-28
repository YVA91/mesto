
function enableValidation(config) {
  const form = Array.from(document.querySelectorAll(config.formSelector));
  form.forEach((formElement) => {
    setEventListeners(config, formElement);
  });
};

const setEventListeners = (config, formElement) => {
  const input = Array.from(formElement.querySelectorAll(config.inputSelector));
  input.forEach((formElement) => {
    formElement.addEventListener('input', (evt) => handleFormInput(evt, config, input));
  });
}
  
const handleFormInput = ((evt, config, input) => {
  const formElement = evt.currentTarget;
  const inputElement = evt.target;
  isValid(config, formElement, inputElement);
});

  
function isValid(config, formElement, inputElement) {
  const input = event.target;
  const errorNode = document.querySelector(`#${input.id}-error`);
  console.log(input)
  if (input.validity.valid) {
    errorNode.textContent = ""
  }
  else {
    errorNode.textContent = input.validationMessage;
  }
}
  


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field-item',
  //submitButtonSelector: '.popup__button',
  //inactiveButtonClass: 'popup__button_disabled',
  //inputErrorClass: 'popup__input_type_error',
  //errorClass: 'popup__error_visible'
});

