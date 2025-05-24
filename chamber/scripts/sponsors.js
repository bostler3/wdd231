const url = 'data/members.json';
const sponsorCards = document.querySelector('.sponsored-container');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    const sponsoredMembers = data.members.filter(member => member.membershipLevel == 'Silver' || member.membershipLevel == 'Gold');
    // Got help on this random part from this StackOverflow post: https://stackoverflow.com/questions/40018925/pick-3-random-elements-from-an-array-and-not-get-the-same-elements-twice
    let randomSponsoredMembers = [];
    do {
        randomSponsoredMembers[randomSponsoredMembers.length] = sponsoredMembers.splice(Math.floor(Math.random() * sponsoredMembers.length), 1)[0];
    } while (randomSponsoredMembers.length < 3);
    displaySponsoredMembers(randomSponsoredMembers);
}

getMemberData();

const displaySponsoredMembers = (sponsoredMembers) => {
    sponsoredMembers.forEach((sponsoredMember) => {
        let sponsorCard = document.createElement('section');
        
        
        let logo = document.createElement('img');
        
        
        let name = document.createElement('h3');
        let line = document.createElement('hr');
        line.setAttribute('class', 'sponsor-line');
        let address = document.createElement('p');
        
        let phone = document.createElement('p');
        
        let website = document.createElement('a');
        
        let membershipLevel = document.createElement('p');
        
        name.textContent = sponsoredMember.name;
        address.textContent = sponsoredMember.address;
        phone.textContent = sponsoredMember.phone;
        website.textContent = sponsoredMember.website;
        membershipLevel.textContent = `Membership Level: ${sponsoredMember.membershipLevel}`;
        logo.setAttribute('src', sponsoredMember.imageUrl);
        logo.setAttribute('alt', `Logo of ${sponsoredMember.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 'auto');
        logo.setAttribute('height', '75');
        website.setAttribute('href', sponsoredMember.website);    
        sponsorCard.appendChild(name);
        sponsorCard.appendChild(line);
        sponsorCard.appendChild(logo);
        sponsorCard.appendChild(address);
        sponsorCard.appendChild(phone);
        sponsorCard.appendChild(website);
        sponsorCard.appendChild(membershipLevel);
        sponsorCards.appendChild(sponsorCard);


    });
}