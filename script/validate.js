const config = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__field-item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__field-item_error',
  errorClass: '.popup__field-item-error_visible'
})

function enableValidation (config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

function setEventListeners (formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config)
      toggleButtonState(inputList, buttonElement, config);
      
    });
  });
  toggleButtonState(inputList, buttonElement, config);
}; 

function isValid (formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

function showInputError (formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

function hideInputError (formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

function toggleButtonState (inputList, buttonElement, config) {
 if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }

};

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function resetValidationForm(config, formReset) {
  const inputList = Array.from(formReset.querySelectorAll(config.inputSelector));
    inputList.forEach((inputElement) => {
      hideInputError(formReset, inputElement, config)
    })
  const buttonElement = formReset.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
}
  
enableValidation(config)
