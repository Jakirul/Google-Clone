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


all.addEventListener('click', (e) => {
    e.preventDefault();
    getSearchResult(e)
})





