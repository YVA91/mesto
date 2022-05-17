export function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', handleEcsClosePopup)
};

export function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEcsClosePopup)
}

function handleEcsClosePopup(evt) {
  if (evt.key === "Escape") {
    const escClosePopup = document.querySelector('.popup_opened');
    closePopup(escClosePopup)
  }
}
