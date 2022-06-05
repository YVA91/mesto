import '../pages/index.css'

import { Card } from "../components/Cards.js";
import { FormValidator } from "../components/FormValidator.js";
import { initialCards } from "../utils/arrayPhoto.js";
import { config } from "../utils/objectValidation.js";
import { selectorImgPopup } from "../utils/const.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";

import { nameInput, jobInput, formNewName, userName, userJob, buttonNewName, buttonNewPlace, formNewPhoto, newTitle, newLink, cardsPlace, popupTemplate, selectorPopupNewName, selectorPopupNewPhoto } from "../utils/const.js";

// Валидация

const formNewNameValidator = new FormValidator(config, formNewName);
formNewNameValidator.enableValidation();

const formNewPhotoValidator = new FormValidator(config, formNewPhoto);
formNewPhotoValidator.enableValidation();

// Создание начальных карточек

function createCard(dataName, dataLink) {
  const card = new Card(dataName, dataLink, popupTemplate, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

const сardList = new Section({
  data: initialCards,
  renderer: (item) => {
    сardList.addItem(createCard(item.name, item.link));
  }
},
  cardsPlace
);

сardList.renderItems();

//Открытие картинок

const popupBigImg = new PopupWithImage(selectorImgPopup);

function handleCardClick(name, link) {
  popupBigImg.open(name, link);
};

popupBigImg.setEventListeners()

//Создание новых карточек с местами 

const popupNewPhoto = new PopupWithForm ({ 
  popupSelector: selectorPopupNewPhoto,
  handleSubmitForm: () => {
    сardList.addItem(createCard(newTitle.value, newLink.value));
  }
})

buttonNewPlace.addEventListener('click', function () {
  formNewPhotoValidator.resetValidationForm();
  popupNewPhoto.open();
});

popupNewPhoto.setEventListeners() 

// Попап с именем

const newInfoProfile = new UserInfo( userName, userJob )

const popupNewName= new PopupWithForm({ 
  popupSelector: selectorPopupNewName, 
  handleSubmitForm: () => {
    newInfoProfile.setUserInfo(nameInput.value, jobInput.value)
  }
})

buttonNewName.addEventListener('click', function () {
  const userInfo = newInfoProfile.getUserInfo()
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.job;
  formNewNameValidator.resetValidationForm();
  popupNewName.open();
});

popupNewName.setEventListeners() 
