const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job'); 
const formElement = document.querySelector('.popup_new-name');
const userName = document.querySelector('.profile__name');
const userJop = document.querySelector('.profile__profession'); 

const element = document.querySelector('.profile__edit-button');
element.addEventListener('click', function () {
  const close = document.querySelector('.popup_new-name')
  close.classList.add('popup_opened');
}); 

const newPlace = document.querySelector('.profile__add-button');
  newPlace.addEventListener('click', function () {
    const closeNewPhoto = document.querySelector('.popup_new-photo')
    closeNewPhoto.classList.add('popup_opened');
  }); 

const placeClose = document.querySelector('.popup__close_photo');
placeClose.addEventListener('click', function () {
  const popup = document.querySelector('.popup_new-photo')
  popup.classList.remove('popup_opened');
});

const click = document.querySelector('.popup__close');
click.addEventListener('click', function () {
  const popup = document.querySelector('.popup_opened')
  popup.classList.remove('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userJop.textContent;
});

function closePopup() {
  const popup = document.querySelector('.popup_opened')
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); 
  userName.textContent = nameInput.value;
  userJop.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const photoList = document.querySelector('.photo');
const photoTemplate = document.querySelector('.photo-template');
const newPhoto = document.querySelector('.popup_new-photo');
const newTitle = document.querySelector('#title');
const newLink = document.querySelector('#link'); 
const openImgPopup = document.querySelector('.popup_open-photo');
const lookPhotoBig = document.querySelector('.popup__item-img');
const figcaption = document.querySelector('.popup__item-title');
const closeBigPhoto = document.querySelector('.popup__close_img');

function getElement(element) {
  const getPhoto = photoTemplate.content.cloneNode(true);
  getPhoto.querySelector('.photo__item-title').textContent = element.name;
  getPhoto.querySelector('.photo__item-img').src = element.link;
  getPhoto.querySelector('.photo__item-img').alt = element.name;
  getPhoto.querySelector('.photo__item-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo__item-like_actve');
  }); 
  
  const deleteButton = getPhoto.querySelector('.photo__remove');
  const elementImg = getPhoto.querySelector('.photo__item-img')

  function lookPhoto() {
    openImgPopup.classList.add('popup_opened');
  };

  function putPhoto() {
    lookPhotoBig.src = element.link;
    lookPhotoBig.alt = element.link;
    figcaption.textContent = element.name;
    lookPhoto();
  };

  deleteButton.addEventListener('click', removeElement);
  elementImg.addEventListener('click', putPhoto);
  closeBigPhoto.addEventListener('click', closePopup);

  return getPhoto;
};

function removeElement(evt) {
  const removePhoto = evt.target.closest('.photo__item');
  removePhoto.remove();
}

function handleAddElement(evt) {
  evt.preventDefault();
  const putPlace = getElement({name: newTitle.value, link: newLink.value});
  photoList.prepend(putPlace);
  newTitle.value='';
  newLink.value='';
  closePopup();
}

newPhoto.addEventListener('submit', handleAddElement);

function render() {
  const getHtmlElement = initialCards.map(getElement);
  photoList.append(...getHtmlElement);
};

render()

