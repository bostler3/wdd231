const visitsElement = document.querySelector('#visits');

let numVisits = localStorage.getItem("numVisits-ls");

if (!numVisits) {
    numVisits = 0;
    visitsElement.textContent = numVisits;
}

numVisits = parseInt(numVisits) + 1;
localStorage.setItem("numVisits-ls", numVisits);
visitsElement.textContent = numVisits;