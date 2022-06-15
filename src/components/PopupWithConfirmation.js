import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleSubmitCallBack }) {
    super(popupSelector);
    this._handleSubmitCallBack = handleSubmitCallBack
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleSubmitCallBack()
    })
  }

  setSubmitAction(action) {
    this._handleSubmitCallBack = action
  }
}
