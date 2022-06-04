import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupimg = this._popupElement.querySelector('.popup__item-img')
    this._popupfigcaption = this._popupElement.querySelector('.popup__item-title')
  }

  open(name, link) {
    this._popupimg.src = link;
    this._popupimg.alt = name;
    this._popupfigcaption.textContent = name;
    super.open();
  };
}


