
export class Card {
  constructor(data, userId, template, handleCardClick, { handleRemoveButtonClick }) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data.owner._id;
    this._id = data._id;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._handleRemoveButtonClick = handleRemoveButtonClick;
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
    if (this._cardId !== this._userId) {
    this._photoDelete.classList.add('photo__remove_inactive');
    }

    return this._element;
  }

  _setEventListeners = () => {
    this._photoDelete.addEventListener('click', () => {
      this._handleRemoveButtonClick(this._id);
    });
    this._photoLike.addEventListener('click', () => {
      this._likeCard();
    });
    this._photoItems.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  };
  
  deleteCard = () => {
    this._element.remove();
    this._element = null
  };

  _likeCard = () => {
    this._photoLike.classList.toggle('photo__item-like_actve');
  };

}
