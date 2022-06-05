
export class Card {
  constructor(name, link, template, handleCardClick) {
    this._name = name;
    this._link = link;
    this._template = template
    this._handleCardClick = handleCardClick
  }

  _getTemplate = () => {
    const template = document.querySelector(this._template).content.querySelector('.photo__item').cloneNode(true);
    return template;
  }

  generateCard = () => {
    this._element = this._getTemplate();
    this._photoItems = this._element.querySelector('.photo__item-img')
    this._photoItems.src = this._link;
    this._photoItems.alt = this._name;
    this._element.querySelector('.photo__item-title').textContent = this._name
    this._photoDelete = this._element.querySelector('.photo__remove');
    this._photoLike = this._element.querySelector('.photo__item-like');
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners = () => {
    this._photoDelete.addEventListener('click', () => {
      this._deleteCard();
    });
    this._photoLike.addEventListener('click', () => {
      this._likeCard();
    });
    this._photoItems.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  };
  
  _deleteCard = () => {
    this._element.remove();
    this._element = null
  };

  _likeCard = () => {
    this._photoLike.classList.toggle('photo__item-like_actve');
  };
}
