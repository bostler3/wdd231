import players from '../data/players.mjs';

const cards = document.querySelector('.card-container');

players.forEach((player) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    let cardFront = document.createElement('section');
    cardFront.setAttribute('class', 'card-front');
    let cardBack = document.createElement('section');
    cardBack.setAttribute('class', 'card-back');
    let photo = document.createElement('img');
    let name = document.createElement('h2');
    let team = document.createElement('p');
    let stats = document.createElement('h2');
    let goals = document.createElement('p');
    let goalsPerMatch = document.createElement('p');
    let assists = document.createElement('p');
    name.textContent = player.playerName;
    team.textContent = player.team;
    stats.textContent = 'STATS';
    goals.textContent = `Goals: ${player.goals}`;
    goalsPerMatch.textContent = `Goals per match: ${player.goalsPerMatch}`;
    assists.textContent = `Assists: ${player.assists}`;
    photo.setAttribute('src', player.imageUrl);
    photo.setAttribute('alt', `Logo of ${player.playerName}`);
    photo.setAttribute('loading', 'lazy');
    photo.setAttribute('width', 'auto');
    photo.setAttribute('height', '100');
    cardFront.appendChild(photo);
    cardFront.appendChild(name);
    cardFront.appendChild(team);
    cardBack.appendChild(stats);
    cardBack.appendChild(goals);
    cardBack.appendChild(goalsPerMatch);
    cardBack.appendChild(assists);
    card.appendChild(cardFront);
    card.appendChild(cardBack);
    cards.appendChild(card);

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});