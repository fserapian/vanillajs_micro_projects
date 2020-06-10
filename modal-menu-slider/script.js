const toggleBtn = document.getElementById('toggle');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modalContainer = document.getElementById('modal');

// Toggle nav
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

// Open modal
openBtn.addEventListener('click', () => {
  modalContainer.classList.add('show-modal');
});

// Close modal
closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show-modal');
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) =>
  e.target == modalContainer
    ? modalContainer.classList.remove('show-modal')
    : false
);
