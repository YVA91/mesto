import { photoBig, figcaption, openPopup, buttonOpenImgPopup } from './script.js'

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
    this._element.querySelector('.photo__item-img').src = this._link;
    this._element.querySelector('.photo__item-img').alt = this._name;
    this._element.querySelector('.photo__item-title').textContent = this._name

    this._buttonDeleteElement = this._element.querySelector('.photo__remove');
    this._buttonLikeElement = this._element.querySelector('.photo__item-like');
    this._buttonShowElement = this._element.querySelector('.photo__item-img');





    this._setEventListeners();
    return this._element;
  }


  _setEventListeners = () => {
    this._buttonDeleteElement.addEventListener('click', () => {
      this._deleteCard();
    });
    this._buttonLikeElement.addEventListener('click', () => {
      this._likeCard();
    });
    this._buttonShowElement.addEventListener('click', () => {
      this._bigPhotoCard();
    });
  };
  

  _deleteCard = () => {
    this._buttonDeleteElement.closest('.photo__item').remove();
  };

  _likeCard = () => {
    this._buttonLikeElement.classList.toggle('photo__item-like_actve');
  };

  _bigPhotoCard = () => {
  photoBig.src = this._link;
  photoBig.alt = this._name;
  figcaption.textContent = this._name;
  openPopup(buttonOpenImgPopup)
};

}