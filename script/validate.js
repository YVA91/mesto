export class FormValidator {
  constructor(config, formValidation) {
    this._config = config
    this._formValidation = formValidation;
  }

  enableValidation() {
    this._formValidation.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
  
  _setEventListeners() {
    this._inputList = Array.from(this._formValidation.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formValidation.querySelector(this._config.submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();

      });
    });
    this._toggleButtonState();
  };
  
  _isValid (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formValidation.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formValidation.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  };
  
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }
    
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  resetValidationForm() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    })
    this._toggleButtonState();
  }
};
