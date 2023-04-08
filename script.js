const cards = document.querySelectorAll('.card');
const modalContainer = document.getElementById('modal-container');
const modalImage = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');

cards.forEach((card) => {
  card.addEventListener('click', () => {

    const imageUrl = card.style.backgroundImage.slice(5, -2);

    modalImage.setAttribute('src', imageUrl);

    modalContainer.style.display = 'flex';
  });
});

modalClose.addEventListener('click', () => {

  modalContainer.style.display = 'none';
});
