const url = 'data/members.json';
const cards = document.querySelector('.container');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.textContent = member.website;
        logo.setAttribute('src', member.imageUrl);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 'auto');
        logo.setAttribute('height', '75');
        website.setAttribute('href', member.website);
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);
    });
}