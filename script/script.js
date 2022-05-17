import { Card } from "./cards.js";
import { FormValidator } from "./validate.js";
import { initialCards } from "./arrayPhoto.js";
import { config } from "./objectValidation.js";
import { openPopup, closePopup } from "./function.js";
import { buttonOpenImgPopup } from "./const.js";

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
const buttonCloseBigPhoto = document.querySelector('.popup__close_img');
const formPlaceReset = document.querySelector('#resetformnewplace')
const popupList = document.querySelectorAll('.popup');
const cardsPhoto = document.querySelector('.photo')


const formNewNameValidator = new FormValidator(config, formNewName);
formNewNameValidator.enableValidation();

const formNewPhotoValidator = new FormValidator(config, formNewPhoto);
formNewPhotoValidator.enableValidation();

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
  const cards = new Card(item.name, item.link);
  const cardElements = cards.generateCard();
  return cardElements
};

function handleAddElement(evt) {
  evt.preventDefault();
  const newCards = createPhoto({ name: newTitle.value, link: newLink.value });
  cardsPhoto.prepend(newCards);
  closePopup(formNewPhoto);
}

buttonCloseFormNewPhoto.addEventListener('click', () => closePopup(formNewPhoto));
buttonCloseFormNewName.addEventListener('click', () => closePopup(formNewName));
buttonCloseBigPhoto.addEventListener('click', () => closePopup(buttonOpenImgPopup));

buttonNewName.addEventListener('click', handleOpenPopupNewName);
buttonNewPlace.addEventListener('click', handleOpenPopupNewPlace);

formNewName.addEventListener('submit', handleSaveNewName);
formNewPhoto.addEventListener('submit', handleAddElement);

initialCards.forEach ((item) => {
  const newCards = createPhoto(item)
  cardsPhoto.prepend(newCards);
});


popupList.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup_opened')) {
      closePopup(element);
    }
  });
});