const cards = document.querySelector('.container');

// API source's 'free' access limits results on calls.

// *** English Premier League ***

// Get data with API call
async function fetchEPLTeams() {
    const urlsEPL = [
        // This will get data for the first 10 teams
        'https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=English_Premier_League',
        // These get the remaining 10 teams
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Leeds_United',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Liverpool',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Manchester_City',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Manchester_United',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Newcastle_United',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Nottingham_Forest',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Sunderland',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Tottenham_Hotspur',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=West_Ham_United',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Wolverhampton_Wanderers'
    ];
    try {
        const responses = await Promise.all(urlsEPL.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        const combinedData = data.flat();
        delete combinedData[6].teams[1]; // This is Nottingham Forest.  It has two entries by name in the API source.  This deletes the object without values.
        // For testing:  console.log('Combined Data:', combinedData);
        return combinedData;
    } catch (error) {
        console.error('Error fetching APIs:', error);
    }
}

// Generate cards
fetchEPLTeams()
    .then(data => {
        data.forEach(obj => {
            obj.teams.forEach(team => {
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let logo = document.createElement('figure');
                let img = document.createElement('img');
                let location = document.createElement('p');
                let yearFormed = document.createElement('p');
                let league = document.createElement('p');
                let learnMore = document.createElement('button');
                let teamDialog = document.createElement('dialog');
                teamDialog.setAttribute('class', 'modal');
                let dialogHeader = document.createElement('h3');
                dialogHeader.textContent = 'Team History';
                let dialogButton = document.createElement('button');
                dialogButton.setAttribute('class', 'modalCloseButton');
                dialogButton.textContent = '❌';
                let dialogText = document.createElement('p');
                dialogText.textContent = team.strDescriptionEN;
                teamDialog.appendChild(dialogHeader);
                teamDialog.appendChild(dialogButton);
                teamDialog.appendChild(dialogText);
                name.textContent = team.strTeam;
                location.textContent = team.strLocation;
                yearFormed.textContent = `Formed in ${team.intFormedYear}`;
                league.textContent = team.strLeague;
                img.setAttribute('src', team.strBadge);
                img.setAttribute('alt', `Logo of ${team.strTeam} team`);
                img.setAttribute('loading', 'lazy');
                learnMore.textContent = 'Learn More';
                learnMore.setAttribute('class', 'modalOpenButton');
                logo.appendChild(img);
                card.appendChild(logo);
                card.appendChild(name);
                card.appendChild(location);
                card.appendChild(yearFormed);
                card.appendChild(league);
                card.appendChild(learnMore);
                card.appendChild(teamDialog);
                learnMore.addEventListener('click', () => {
                    teamDialog.showModal();
                });
                dialogButton.addEventListener('click', () => {
                    teamDialog.close();
                })
                cards.appendChild(card);
            });
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

// *** La Liga ***

// Get data with API call
async function fetchLaLigaTeams() {
    const urlsLaLiga = [
        // This will get data for the first 10 teams
        'https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=Spanish_La_Liga',
        // These get the remaining 10 teams
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Mallorca',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Osasuna',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Rayo_Vallecano',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Real_Betis',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Real_Madrid',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Real_Sociedad',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Real_Valladolid',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Sevilla',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Valencia',
        'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Villarreal'
    ];
    try {
        const responses = await Promise.all(urlsLaLiga.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        const combinedData = data.flat();
        delete combinedData[4].teams[1]; // This is Real Betis.  It has two entries by name in the API source.  This deletes the object without values.
        delete combinedData[5].teams[1]; // This is Real Madrid.  It has two entries by name in the API source.  This deletes the object without values.
        delete combinedData[9].teams[1]; // This is Valencia.  It has two entries by name in the API source.  This deletes the object without values.
        // for testing:  console.log('Combined Data:', combinedData);
        return combinedData;
    } catch (error) {
        console.error('Error fetching APIs:', error);
    }
}

// Generate cards
fetchLaLigaTeams()
    .then(data => {
        data.forEach(obj => {
            obj.teams.forEach(team => {
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let logo = document.createElement('figure');
                let img = document.createElement('img');
                let location = document.createElement('p');
                let yearFormed = document.createElement('p');
                let league = document.createElement('p');
                let learnMore = document.createElement('button');
                let teamDialog = document.createElement('dialog');
                teamDialog.setAttribute('class', 'modal');
                let dialogHeader = document.createElement('h3');
                dialogHeader.textContent = 'Team History';
                let dialogButton = document.createElement('button');
                dialogButton.setAttribute('class', 'modalCloseButton');
                dialogButton.textContent = '❌';
                let dialogText = document.createElement('p');
                dialogText.textContent = team.strDescriptionEN;
                teamDialog.appendChild(dialogHeader);
                teamDialog.appendChild(dialogButton);
                teamDialog.appendChild(dialogText);
                name.textContent = team.strTeam;
                location.textContent = team.strLocation;
                yearFormed.textContent = `Formed in ${team.intFormedYear}`;
                league.textContent = team.strLeague;
                img.setAttribute('src', team.strBadge);
                img.setAttribute('alt', `Logo of ${team.strTeam} team`);
                img.setAttribute('loading', 'lazy');
                learnMore.textContent = 'Learn More';
                learnMore.setAttribute('class', 'modalOpenButton');
                logo.appendChild(img);
                card.appendChild(logo);
                card.appendChild(name);
                card.appendChild(location);
                card.appendChild(yearFormed);
                card.appendChild(league);
                card.appendChild(learnMore);
                card.appendChild(teamDialog);
                learnMore.addEventListener('click', () => {
                    teamDialog.showModal();
                });
                dialogButton.addEventListener('click', () => {
                    teamDialog.close();
                })
                cards.appendChild(card);
            });
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
/*
// Was not able to do because of API call limits
// *** Major League Soccer ***

// Get data with API call
async function fetchMLSTeams() {
    const urlsMLS = [
    // This will get data for the first 10 teams
    'https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=American_Major_League_Soccer',
    // These get the remaining teams
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Houston_Dynamo',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Inter_Miami',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=LA_Galaxy',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Los_Angeles_FC',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Minnesota_United',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Nashville_SC',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=New_England_Revolution',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=New_York_City_FC',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=New_York_Red_Bulls',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Orlando_City',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Philadelphia_Union',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Portland_Timbers',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Real_Salt_Lake',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=San_Diego_FC',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=San_Jose_Earthquakes',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Seattle_Sounders_FC',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Sporting_Kansas_City',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=St._Louis_City_SC',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Toronto_FC',
    'https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Vancouver_Whitecaps'
    ];
    try {
        const responses = await Promise.all(urlsMLS.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        const combinedData = data.flat();
        delete combinedData[20].teams[1]; // This is Vancouver Whitecaps.  It has two entries by name in the API source.  This deletes the object without values.
        // for testing:  console.log('Combined Data:', combinedData);
        return combinedData;
    } catch (error) {
      console.error('Error fetching APIs:', error);
    }
}

// Generate cards
fetchMLSTeams()
    .then(data => {
        data.forEach(obj => {
            obj.teams.forEach(team => {
                // for testing:  console.log('team:', team.strTeam);
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let logo = document.createElement('figure');
                let img = document.createElement('img');
                let location = document.createElement('p');
                let learnMore = document.createElement('button');
                name.textContent = team.strTeam;
                location.textContent = team.strLocation;
                img.setAttribute('src', team.strBadge);
                img.setAttribute('alt', `Logo of ${team.strTeam} team`);
                img.setAttribute('loading', 'lazy');
                learnMore.textContent = 'Learn More';
                logo.appendChild(img);
                card.appendChild(name);
                card.appendChild(logo);
                card.appendChild(location);
                card.appendChild(learnMore);
                cards.appendChild(card);
            });
        });
     })
     .catch(error => {
        console.error('Error:', error);
     });
*/