import { Popup } from "./popup.js";
import { popupitemImg, figcaption } from "./const.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }

  open (name, link) {
    popupitemImg.src = link;
    popupitemImg.alt = name;
    figcaption.textContent = name;
    super.open();
  };
}


