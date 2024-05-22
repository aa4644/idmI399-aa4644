//help button
const open = document.getElementById('help_button');
const help_modal_container = document.getElementById('help_modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    help_modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    help_modal_container.classList.remove('show');
});

// puddle slime
const puddleSlimeButton = document.getElementById('puddle');
const slimePopupOverlay = document.getElementById('slime-PopUp');
const closePopupButton = document.getElementById('close-popup');

puddleSlimeButton.addEventListener('click', () => {
    slimePopupOverlay.classList.add('show');
});


closePopupButton.addEventListener('click', (event) => {
    event.preventDefault();
    slimePopupOverlay.classList.remove('show');
});
