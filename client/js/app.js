const input = document.querySelector("#search");
const button = document.querySelector(".getAll")
const form = document.querySelector("form");
const one = document.querySelector(".one");
const all = document.querySelector(".all");
const searchResults = document.querySelector('#search-result');

//function to show 10 search results
async function getSearchResult(e) {
    const searchString = input.value;
    const search = await fetch(`http://localhost:3000/${searchString}`)
    const data = await search.json()
           
    // I do this to prevent search results from stacking
    searchResults.textContent = ""
    
    // Data returns an error object if no results are shown
    if (data.error) {
            const h1 = document.createElement("h1");
            h1.textContent = `${data.error}`
            searchResults.append(h1)
    } else {
        data.forEach(response => {
            //adding website name to search results
           
            const title = document.createElement("a");
            title.textContent = `${response.search}`
            title.setAttribute("href", `${response.url}`);
            
            searchResults.append(title);
            
            //adding website info to search results
            const description = document.createElement("p");
            description.textContent = `${response.description}`
            searchResults.append(description);
    
    
        })
    }
       
}

function getRadnomResult(){
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(`http://localhost:3000/random/`)
        .then(r=>r.json())
        .then(r=> r.url)
        .then(r => window.open(r, '_blank')) //opens new tab
        //.then(r => window.location.assign(r)) //redirects
}

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



