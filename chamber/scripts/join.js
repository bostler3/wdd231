// Got help from a Bing search for hidden input timestamp on html form submit
const form = document.querySelector('.form');
const timestampElement = document.querySelector('#timestamp');
const membershipLevelCards = document.querySelector('.membership-levels-container');

form.addEventListener('submit', function () {
    const currentTimestamp = new Date().toLocaleString();
    timestampElement.value = currentTimestamp;
});

const modalElement = document.querySelector('#modal-nonprofit');
const openModal = document.querySelector('.open-button-nonprofit');
const closeModal = document.querySelector('.close-button-nonprofit');

openModal.addEventListener("click", () => {
    modalElement.showModal();
});

closeModal.addEventListener("click", () => {
    modalElement.close();
});

const modalElementBronze = document.querySelector('#modal-bronze');
const openModalBronze = document.querySelector('.open-button-bronze');
const closeModalBronze = document.querySelector('.close-button-bronze');

openModalBronze.addEventListener("click", () => {
    modalElementBronze.showModal();
});

closeModalBronze.addEventListener("click", () => {
    modalElementBronze.close();
});

const modalElementSilver = document.querySelector('#modal-silver');
const openModalSilver = document.querySelector('.open-button-silver');
const closeModalSilver = document.querySelector('.close-button-silver');

openModalSilver.addEventListener("click", () => {
    modalElementSilver.showModal();
});

closeModalSilver.addEventListener("click", () => {
    modalElementSilver.close();
});

const modalElementGold = document.querySelector('#modal-gold');
const openModalGold = document.querySelector('.open-button-gold');
const closeModalGold = document.querySelector('.close-button-gold');

openModalGold.addEventListener("click", () => {
    modalElementGold.showModal();
});

closeModalGold.addEventListener("click", () => {
    modalElementGold.close();
});