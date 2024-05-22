const open = document.getElementById('help_button');
const help_modal_container = document.getElementById('help_modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  help_modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  help_modal_container.classList.remove('show');
});
