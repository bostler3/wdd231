const mainnav = document.querySelector('#sub-nav');
const hambutton = document.querySelector('#menu');

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".container");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

gridbutton?.addEventListener('click', () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton?.addEventListener('click', () => {
    display.classList.add("list");
    display.classList.remove("grid");
});