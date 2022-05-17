import { buttonOpenImgPopup, figcaption, popupitemImg } from "./const.js";
import { openPopup } from "./function.js";
export class Card {
  constructor(name, link, template) {
    this._name = name;
    this._link = link;
    this._template = template
  }

  _getTemplate = () => {
    const template = document.querySelector('.photo-template').content.querySelector('.photo__item').cloneNode(true);
    return template;
  }

  generateCard = () => {
    this._element = this._getTemplate();
    const photoItemsImg = this._element.querySelector('.photo__item-img')
    photoItemsImg.src = this._link;
    photoItemsImg.alt = this._name;
    this._element.querySelector('.photo__item-title').textContent = this._name
    this._clikDeletePhoto = this._element.querySelector('.photo__remove');
    this._clikLikePhoto = this._element.querySelector('.photo__item-like');
    this._clikOpenBigPhoto = photoItemsImg;

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners = () => {
    this._clikDeletePhoto.addEventListener('click', () => {
      this._deleteCard();
    });
    this._clikLikePhoto.addEventListener('click', () => {
      this._likeCard();
    });
    this._clikOpenBigPhoto.addEventListener('click', () => {
      this._openBigPhoto ();
    });
  };
  
  _deleteCard = () => {
    this._element.remove();
    this._element = null
  };

  _likeCard = () => {
    this._clikLikePhoto.classList.toggle('photo__item-like_actve');
  };

  _openBigPhoto = () => {
    popupitemImg.src = this._link
    popupitemImg.src = this._link
    figcaption.textContent = this._name
    openPopup(buttonOpenImgPopup)
  };
}