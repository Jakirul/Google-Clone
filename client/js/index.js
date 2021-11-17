const input = document.querySelector("#search");
const button = document.querySelector(".getAll")
const form = document.querySelector("form");
const one = document.querySelector(".one");
const all = document.querySelector(".all");
let searchResults = document.querySelector('#search-result');

all.addEventListener('click', (e) => {
    e.preventDefault();
    getSearchResult(e)
})

one.addEventListener('click', getRadnomResult)
