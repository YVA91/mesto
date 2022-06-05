import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor({ popupElement, handleSubmitForm}) {
    super(popupElement);
    this._handleSubmitForm = handleSubmitForm
    this._inputList = this._popupElement.querySelectorAll('.popup__field-item');
    }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
  });
  return this._formValues;
} 

setEventListeners() {
  super.setEventListeners();
  this._popupForm = this._popupElement.querySelector('.popup__form');
  this._popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    this._handleSubmitForm(this._getInputValues());
    this.close()
      })
  }

  close () {
    super.close()
    this._popupForm.reset()
  }
}







  