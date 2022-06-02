import { Popup } from "./popup.js";
export class PopupWithForm extends Popup {
    constructor({selector, handleSubmitForm}) {
      super(selector);
      this._handleSubmitForm = handleSubmitForm
    }

  _getInputValues() {
    this._inputList = this._selector.querySelectorAll('.popup__field-item');
    this._formValues = {};
    this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
  });
  return this._formValues;
} 

setEventListeners() {
  super.setEventListeners();
  this._formList = this._selector.querySelector('.popup__form');
  this._formList.addEventListener('submit', (e) => {
    e.preventDefault();
    this._handleSubmitForm(this._getInputValues());
    this.close()
      })
  }

  close () {
    super.close()
    this._formList.reset()
  }
}







  