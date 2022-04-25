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

buttonCloseFormNewPhoto.addEventListener('click', handleCloseFormNewPhoto)

function handleCloseFormNewPhoto() {
  document.querySelector('#resetformnewplace').reset();
  closePopup(formNewPhoto)
};

buttonCloseFormNewName.addEventListener('click', handleCloseFormNewName)

function handleCloseFormNewName() {
  nameInput.value = userName.textContent;
  jobInput.value = userJop.textContent;
  closePopup(formNewName)
};

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

function handleAddElement(evt) {
  evt.preventDefault();
  const putPlace = getElementPhoto(newTitle.value, newLink.value);
  photoList.prepend(putPlace);
  document.querySelector('#resetformnewplace').reset();
  closePopup(formNewPhoto);
}

function handleLike(evt) {
  evt.target.classList.toggle('photo__item-like_actve');
};

function removeElement(evt) {
  const removePhoto = evt.target.closest('.photo__item');
  removePhoto.remove();
}

formNewName.addEventListener('submit', handleSaveNewName);
formNewPhoto.addEventListener('submit', handleAddElement);
buttonNewName.addEventListener('click', () => openPopup(formNewName));
buttonNewPlace.addEventListener('click', () => openPopup(formNewPhoto)); 
buttonCloseBigPhoto.addEventListener('click', () => closePopup(buttonOpenImgPopup));


initialCards.forEach(element => {
  photoList.append(getElementPhoto(element.name, element.link));
});

