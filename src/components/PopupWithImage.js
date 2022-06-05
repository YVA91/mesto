import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popupElement.querySelector('.popup__item-img')
    this._popupFigcaption = this._popupElement.querySelector('.popup__item-title')
  }

  open(name, link) {
    this._popupImg.src = link;
    this._popupImg.alt = name;
    this._popupFigcaption.textContent = name;
    super.open();
  };
}


