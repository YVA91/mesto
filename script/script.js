import { Card } from "./cards.js";
import { FormValidator } from "./validate.js";

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

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job'); 
const formNewName = document.querySelector('.popup_new-name');
const userName = document.querySelector('.profile__name');
const userJop = document.querySelector('.profile__profession'); 
const buttonNewName = document.querySelector('.profile__edit-button')
const buttonNewPlace = document.querySelector('.profile__add-button')
const formNewPhoto = document.querySelector('.popup_new-photo')
const buttonCloseFormNewPhoto = document.querySelector('.popup__close_photo')
const buttonCloseFormNewName = document.querySelector('.popup__close')
const newTitle = document.querySelector('#title');
const newLink = document.querySelector('#link');
export const buttonOpenImgPopup = document.querySelector('.popup_open-photo');
const buttonCloseBigPhoto = document.querySelector('.popup__close_img');
const formPlaceReset = document.querySelector('#resetformnewplace')
const popupList = document.querySelectorAll('.popup');

const config = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__field-item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__field-item_error',
  errorClass: '.popup__field-item-error_visible'
})

const formNewNameValidator = new FormValidator(config, formNewName);
formNewNameValidator.enableValidation();

const formNewPhotoValidator = new FormValidator(config, formNewPhoto);
formNewPhotoValidator.enableValidation();

export function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', handleEcsClosePopup)
};

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEcsClosePopup)
}

function handleEcsClosePopup (evt) {
  if (evt.key === "Escape") {
    const escClosePopup = document.querySelector('.popup_opened');
    closePopup(escClosePopup)
  }
}

function handleSaveNewName(evt) {
  evt.preventDefault(); 
  userName.textContent = nameInput.value;
  userJop.textContent = jobInput.value;
  closePopup(formNewName);
}

function handleOpenPopupNewName() {
  nameInput.value = userName.textContent;
  jobInput.value = userJop.textContent;
  formNewNameValidator.resetValidationForm();
  openPopup(formNewName)
}

function handleOpenPopupNewPlace() {
  formPlaceReset.reset()
  formNewPhotoValidator.resetValidationForm();
  openPopup(formNewPhoto)
}

function createPhoto (item) {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  document.querySelector('.photo').append(cardElement);
};

function handleAddElement(evt) {
  evt.preventDefault();
  createPhoto ({ name: newTitle.value, link: newLink.value });
  closePopup(formNewPhoto);
}

buttonCloseFormNewPhoto.addEventListener('click', () => closePopup(formNewPhoto));
buttonCloseFormNewName.addEventListener('click', () => closePopup(formNewName));
buttonCloseBigPhoto.addEventListener('click', () => closePopup(buttonOpenImgPopup));

buttonNewName.addEventListener('click', handleOpenPopupNewName);
buttonNewPlace.addEventListener('click', handleOpenPopupNewPlace);

formNewName.addEventListener('submit', handleSaveNewName);
formNewPhoto.addEventListener('submit', handleAddElement);

initialCards.forEach(createPhoto);

popupList.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup_opened')) {
      closePopup(element);
    }
  });
});