import '../pages/index.css'




import { Card } from "../script/cards.js";
import { FormValidator } from "../script/validate.js";
import { initialCards } from "../script/arrayPhoto.js";
import { config } from "../script/objectValidation.js";
import { buttonOpenImgPopup } from "../script/const.js";
import { Section } from "../script/Section.js";
import { PopupWithImage } from "../script/popupWithImage.js";
import { UserInfo } from "../script/userInfo.js";
import { PopupWithForm } from "../script/popupWithForm.js";

import { nameInput, jobInput, formNewName, userName, userJop, buttonNewName, buttonNewPlace, formNewPhoto, newTitle, newLink, cardsPlace, popupTemplate } from "../script/const.js";

// Валидация

const formNewNameValidator = new FormValidator(config, formNewName);
formNewNameValidator.enableValidation();

const formNewPhotoValidator = new FormValidator(config, formNewPhoto);
formNewPhotoValidator.enableValidation();

// Создание начальных карточек
const сardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, popupTemplate, handleCardClick);
    const cardElement = card.generateCard();
    сardList.addItem(cardElement);
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
  selector: formNewPhoto,
  handleSubmitForm: () => {
    const card = new Card(newTitle.value, newLink.value, popupTemplate, handleCardClick);
    const cardElement = card.generateCard();
    сardList.addItem(cardElement);
  }
})

buttonNewPlace.addEventListener('click', function () {
  formNewPhotoValidator.resetValidationForm();
  popupNewPhoto.open();
});

popupNewPhoto.setEventListeners() 

// Попап с именем

const newInfoProfile = new UserInfo ({name:userName, job: userJop})

const popupNewName= new PopupWithForm({ 
  selector: formNewName, 
  handleSubmitForm: () => {
    newInfoProfile.setUserInfo({ name: nameInput, job: jobInput })
  }
})

buttonNewName.addEventListener('click', function () {
  popupNewName.open();
  nameInput.value = userName.textContent;
  jobInput.value = userJop.textContent;
  formNewNameValidator.resetValidationForm();
});

popupNewName.setEventListeners() 
