
function enableValidation(config) {
  const form = document.querySelector(config.formSelector)
  const input = form.querySelectorAll(config.formSelector)
  //input.forEach((element) => {
  //element.addEventListener('input', handliFormInput)
  //});

  form.addEventListener('submit', (event) => handliFormSubmit(event, form))
  form.addEventListener('input', handliFormInput)
}

function handliFormSubmit(event, form) {
  event.preventDefault()
  if (form.checkValidity()) {
    alert("Валидна")
  }
  else {
    alert("Невалидна")
  }
}


function handliFormInput(event) {
  const input = event.target;
  console.log(input)
  const errorNode = document.querySelector(`#${input.id}-error`);
  if (input.validity.valid) {
    errorNode.textContent = ""
  }
  else {
    errorNode.textContent = "Ошибка"
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field-item',
  //submitButtonSelector: '.popup__button',
  //inactiveButtonClass: 'popup__button_disabled',
  //inputErrorClass: 'popup__input_type_error',
  //errorClass: 'popup__error_visible'
}); 





_________

const form = Array.from(document.querySelectorAll(config.formSelector));
form.forEach((formElement) => {
  formElement.addEventListener('click', (e) => {
    e.preventDefault()
    if (formElement.checkValidity()) {
      alert("Валидна")
    }
    else {
      alert("Невалидна")
    }

    //formElement.addEventListener('submit', (event) => handliFormSubmit(event, form))
  });
})
}