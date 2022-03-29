
let element = document.querySelector('.profile__edit-button');
element.addEventListener('click', function () {
  let close = document.querySelector('.popup')
  close.classList.add('popup_opened');
}); 

let click = document.querySelector('.popup__close');
click.addEventListener('click', function () {
  let popup = document.querySelector('.popup_opened')
  popup.classList.remove('popup_opened');
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

let formElement = document.querySelector('.popup__form'); 
let userName = document.querySelector('.profile__name'); 
let userJop = document.querySelector('.profile__profession'); 


function formSubmitHandler(evt) {
  evt.preventDefault(); 
  let nameInput = document.querySelector('.popup__field-name'); 
  let jobInput = document.querySelector('.popup__field-job'); 
  userName.textContent = nameInput.value;
  userJop.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 
