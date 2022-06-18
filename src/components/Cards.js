
export class Card {
  constructor(data, userId, template, handleCardClick, { handleRemoveButtonClick, handlelikeClick }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes
    this._cardId = data.owner._id;
    this._id = data._id;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._handleRemoveButtonClick = handleRemoveButtonClick;
    this._handlelikeClick = handlelikeClick;
    
  }

  likes(active) {
    this._likes = active
    if (this.someLikes()) {
      this._photoLike.classList.add('photo__item-like_actve')
    }
    else {
      this._photoLike.classList.remove('photo__item-like_actve')
    }
    this._element.querySelector('.photo__likes-counter').textContent = this._likes.length
  }

  someLikes() {
    const likes = this._likes.some(data => data._id === this._userId)
    return likes;
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
    if (this._cardId !== this._userId) {
    this._photoDelete.classList.add('photo__remove_inactive');
    }
    this.likes(this._likes)
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners = () => {
    this._photoDelete.addEventListener('click', () => {
      this._handleRemoveButtonClick();
    });

    this._photoLike.addEventListener('click', () => {
      this._handlelikeClick();
    });

    this._photoItems.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  };
  
  deleteCard = () => {
    this._element.remove();
    this._element = null
  };
}
