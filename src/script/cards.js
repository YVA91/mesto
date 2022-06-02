
export class Card {
  constructor(name, link, template, handleCardClick) {
    this._name = name;
    this._link = link;
    this._template = template
    this._handleCardClick = handleCardClick
  }

  _getTemplate = () => {
    const template = document.querySelector('.photo-template').content.querySelector('.photo__item').cloneNode(true);
    return template;
  }

  generateCard = () => {
    this._element = this._getTemplate();
    const photoAttributes = this._element.querySelector('.photo__item-img')
    photoAttributes.src = this._link;
    photoAttributes.alt = this._name;
    this._element.querySelector('.photo__item-title').textContent = this._name
    this._clikDeletePhoto = this._element.querySelector('.photo__remove');
    this._clikLikePhoto = this._element.querySelector('.photo__item-like');
    this._clikOpenBigPhoto = photoAttributes;
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
      this._handleCardClick(this._name, this._link)
    });
  };
  
  _deleteCard = () => {
    this._element.remove();
    this._element = null
  };

  _likeCard = () => {
    this._clikLikePhoto.classList.toggle('photo__item-like_actve');
  };
}
