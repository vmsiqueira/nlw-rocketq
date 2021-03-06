import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

//Catch check button
const checkButtons = document.querySelectorAll('a.check');

for(const button of checkButtons) {
  button.addEventListener('click', handleClick);
}

// Delete button functionality
const deleteButtons = document.querySelectorAll('a.delete');

for(const button of deleteButtons) {
  button.addEventListener('click', (event) => handleClick(event, false))
}

function handleClick(event, check = true) {
  event.preventDefault();
  
  const text = check ? "Marcar como lida" : "Excluir";
  const slug = check ? "check" : "delete";
  const roomId = document.querySelector('#room-id').dataset.id;
  const questionId = event.target.dataset.id;


  const form = document.querySelector('.modal form');
  form.setAttribute('action', `/room/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;

  check ? modalButton.classList.remove('red') : modalButton.classList.add('red');

  modal.open();
}