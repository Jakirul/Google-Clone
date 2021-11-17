const input = document.querySelector("#search");
const button = document.querySelector(".getAll")
const form = document.querySelector("form");
const one = document.querySelector(".one");
const all = document.querySelector(".all");
let searchResults = document.querySelector('#search-result');

all.addEventListener('click', (e) => {
    e.preventDefault();
    getSearchResult(e)


    document.querySelector("img").style.height = "45px"
    document.querySelector("img").style.width = "auto"
    document.querySelector("img").style.margin = "7px 10px 0 0"
    document.querySelector("section").style.flexDirection = "row";
    document.querySelector("section").style.justifyContent = "left"
    document.querySelector("section").style.marginTop = "10px"
    document.querySelector("section").style.alignItems = "flex-start"
    document.querySelector("section").style.height = "auto"
    searchResults.style.marginTop = "10px"
    searchResults.style.marginLeft = "9em"
})

one.addEventListener('click', getRadnomResult)
