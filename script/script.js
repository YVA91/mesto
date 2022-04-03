let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job'); 
let formElement = document.querySelector('.popup__form');
let userName = document.querySelector('.profile__name');
let userJop = document.querySelector('.profile__profession'); 

let element = document.querySelector('.profile__edit-button');
element.addEventListener('click', function () {
  let close = document.querySelector('.popup')
  close.classList.add('popup_opened');
}); 

let click = document.querySelector('.popup__close');
click.addEventListener('click', function () {
  let popup = document.querySelector('.popup_opened')
  popup.classList.remove('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userJop.textContent;
});

let like = document.querySelector('.photo__item-like');
function clickLike() {
  let likeActive = document.querySelector('.photo__item-like')
  likeActive.classList.add('photo__item-like_actve');
}

function closePopup() {
  let popup = document.querySelector('.popup_opened')
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); 
  userName.textContent = nameInput.value;
  userJop.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 
