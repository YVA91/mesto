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
const photoList = document.querySelector('.photo');
const photoTemplate = document.querySelector('.photo-template');
const newTitle = document.querySelector('#title');
const newLink = document.querySelector('#link');
const buttonOpenImgPopup = document.querySelector('.popup_open-photo');
const photoBig = document.querySelector('.popup__item-img');
const figcaption = document.querySelector('.popup__item-title');
const buttonCloseBigPhoto = document.querySelector('.popup__close_img');
const formPlaceReset = document.querySelector('#resetformnewplace')
const formNameReset = document.querySelector('#resetformnewname')
const popupList = document.querySelectorAll('.popup');


function openPopup(item) {
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

function getElementPhoto(name, link) {
  const templateNewPhoto = photoTemplate.content.cloneNode(true);
  const photoItemImgAttribute = templateNewPhoto.querySelector('.photo__item-img');
  templateNewPhoto.querySelector('.photo__item-title').textContent = name;
  photoItemImgAttribute.src = link;
  photoItemImgAttribute.alt = name;

  const deleteButton = templateNewPhoto.querySelector('.photo__remove');

  deleteButton.addEventListener('click', removeElement);
  photoItemImgAttribute.addEventListener('click', handleOpenPhoto);
  templateNewPhoto.querySelector('.photo__item-like').addEventListener('click', handleLike)

  return templateNewPhoto;
};

function handleOpenPhoto(element) {
  photoBig.src = element.target.src;
  photoBig.alt = element.target.alt;
  figcaption.textContent = element.target.alt;
  openPopup(buttonOpenImgPopup)
};

function handleOpenPopupNewName() {
  nameInput.value = userName.textContent;
  jobInput.value = userJop.textContent;
  resetValidationForm(config, formNewName);
  openPopup(formNewName)
}

function handleOpenPopupNewPlace() {
  formPlaceReset.reset()
  resetValidationForm(config, formNewPhoto);
  openPopup(formNewPhoto)
}

function handleAddElement(evt) {
  evt.preventDefault();
  const putPlace = getElementPhoto(newTitle.value, newLink.value);
  photoList.prepend(putPlace);
  closePopup(formNewPhoto);
}

function handleLike(evt) {
  evt.target.classList.toggle('photo__item-like_actve');
};

function removeElement(evt) {
  const removePhoto = evt.target.closest('.photo__item');
  removePhoto.remove();
}

buttonCloseFormNewPhoto.addEventListener('click', () => closePopup(formNewPhoto));
buttonCloseFormNewName.addEventListener('click', () => closePopup(formNewName));
buttonCloseBigPhoto.addEventListener('click', () => closePopup(buttonOpenImgPopup));

buttonNewName.addEventListener('click', handleOpenPopupNewName);
buttonNewPlace.addEventListener('click', handleOpenPopupNewPlace);

formNewName.addEventListener('submit', handleSaveNewName);
formNewPhoto.addEventListener('submit', handleAddElement);


initialCards.forEach(element => {
  photoList.append(getElementPhoto(element.name, element.link));
});

popupList.forEach((element) => { 
  element.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup_opened')) {
          closePopup(element);
      }
  });
});

