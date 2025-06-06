import attractions from '../data/Attractions.mjs';

const cards = document.querySelector('.discover-container');

attractions.forEach(attraction => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let logo = document.createElement('figure');
    let img = document.createElement('img');
    let address = document.createElement('address');
    let desc = document.createElement('p');
    let learnMore = document.createElement('button');
    name.textContent = attraction.name;
    address.textContent = attraction.address;
    desc.textContent = attraction.description;
    img.setAttribute('src', attraction.imageUrl);
    img.setAttribute('alt', `Image of ${attraction.name}`);
    img.setAttribute('loading', 'lazy');
    learnMore.textContent = 'Learn More';
    logo.appendChild(img);
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(desc);
    card.appendChild(address);
    card.appendChild(learnMore);
    cards.appendChild(card);
});

// Got help from a Bing search for "days elapsed localstorage javascript"
function calculateDaysElapsed() {
    const visitsElement = document.querySelector('#visits');
    const msToDays = 1000 * 60 * 60 * 24;
    const now = new Date();
    const storedDate = localStorage.getItem('lastVisitDate-ls');

    if (storedDate) {
        const previousDate = new Date(storedDate);
        const timeDifference = now - previousDate;
        const daysElapsed = Math.floor(timeDifference / msToDays);
        if (daysElapsed < 1) {
            visitsElement.textContent = 'Back so soon? Awesome!';
        } else {
            if (daysElapsed == 1) {
                visitsElement.textContent = `You last visited ${daysElapsed} day ago.`;
            } else {
                visitsElement.textContent = `You last visited ${daysElapsed} days ago.`;
            }
        }
    } else {
        visitsElement.textContent = 'Welcome! Let us know if you have any questions.';
    }
}

function updateLastVisitDate() {
    const now = new Date();
    localStorage.setItem('lastVisitDate-ls', now.toISOString());
}

calculateDaysElapsed();
updateLastVisitDate();