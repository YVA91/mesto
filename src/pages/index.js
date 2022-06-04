import '../pages/index.css'

import { Card } from "../components/Cards.js";
import { FormValidator } from "../components/Validate.js";
import { initialCards } from "../components/arrayPhoto.js";
import { config } from "../components/objectValidation.js";
import { buttonOpenImgPopup } from "../components/const.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";

import { nameInput, jobInput, formNewName, userName, userJob, buttonNewName, buttonNewPlace, formNewPhoto, newTitle, newLink, cardsPlace, popupTemplate } from "../components/const.js";

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

const popupBigImg = new PopupWithImage(buttonOpenImgPopup);

function handleCardClick(name, link) {
  popupBigImg.open(name, link);
};

popupBigImg.setEventListeners()

//Создание новых карточек с местами 

const popupNewPhoto = new PopupWithForm ({ 
  popupElement: formNewPhoto,
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
  popupElement: formNewName, 
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
