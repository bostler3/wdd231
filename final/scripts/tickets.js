import games from '../data/games.mjs';

const cards = document.querySelector('.schedule-container');
const ticketPurchaseForm = document.querySelector('.application-form');
const targetScroll = document.querySelector('#target-scroll');
const form = document.querySelector('.form');
const timestampElement = document.querySelector('#timestamp');

form.addEventListener('submit', function () {
    const currentTimestamp = new Date().toLocaleString();
    timestampElement.value = currentTimestamp;
});

games.forEach((game) => {
    let card = document.createElement('section');
    card.setAttribute('class', 'schedule-card');
    let visitor = document.createElement('p');
    visitor.setAttribute('class', 'schedule-team');
    let home = document.createElement('p');
    home.setAttribute('class', 'schedule-team');
    let stadium = document.createElement('p');
    stadium.setAttribute('class', 'game-details');
    let date = document.createElement('p');
    date.setAttribute('class', 'game-details');
    let time = document.createElement('p');
    time.setAttribute('class', 'game-details');
    let purchaseButton = document.createElement('button');
    purchaseButton.setAttribute('class', 'scheduleButton');
    visitor.textContent = `${game.visitor} @ ${game.home}`;
    stadium.textContent = game.stadium;
    date.textContent = `${game.date}, ${game.kickoff}`;
    purchaseButton.textContent = "Get Tickets!";
    card.appendChild(visitor);
    card.appendChild(stadium);
    card.appendChild(date);
    card.appendChild(purchaseButton);
    cards.appendChild(card);

    purchaseButton.addEventListener('click', () => {
        const gameInfoElement = document.querySelector('#ticket-info-field');
        if (ticketPurchaseForm.style.display === 'none' || ticketPurchaseForm.style.display === '') {
            ticketPurchaseForm.classList.add("show");
            targetScroll.scrollIntoView({ behavior: "smooth" });
            gameInfoElement.value = `${game.visitor} @ ${game.home} on ${game.date}, starting at ${game.kickoff} in ${game.stadium}`;
        } else {
            ticketPurchaseForm.style.display = 'none';
        }
    });
});