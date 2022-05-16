import { openPopup, buttonOpenImgPopup } from './script.js'
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
    this._clikDeletePhoto = this._element.querySelector('.photo__remove');
    this._clikLikePhoto = this._element.querySelector('.photo__item-like');
    this._clikOpenBigPhoto = this._element.querySelector('.photo__item-img');

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
    this._clikDeletePhoto.closest('.photo__item').remove();
  };

  _likeCard = () => {
    this._clikLikePhoto.classList.toggle('photo__item-like_actve');
  };

  _openBigPhoto = () => {
    const popupitemImg = document.querySelector('.popup__item-img')
    popupitemImg.src = this._link
    popupitemImg.src = this._link
    document.querySelector('.popup__item-title').textContent = this._name
    openPopup(buttonOpenImgPopup)
  };
}