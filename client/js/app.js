//function to show 10 search results
async function getSearchResult(e) {
    const searchString = input.value;
    if(!searchString){
        
        return
    }
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
        appendResults(data)
    }      
}

function appendResults(data){
    data.forEach(r => {        
        searchResults.append(makeTitle(r.search, r.url));
        searchResults.append(makeDescription(r.description))
    })
}

function makeTitle(search, url){
    //adding website name to search results
    const title = document.createElement("a");
    title.textContent = `${search}`
    title.setAttribute("href", `${url}`);
    return title;
}

function makeDescription(desc){
    //adding website info to search results
    const description = document.createElement("p");
    description.textContent = `${desc}`
    return description;
}

function getRandomResult(){
    fetch(`http://localhost:3000/random/`)
        .then(r=>r.json())
        .then(r=> r.url)
        .then(r => window.open(r, '_blank')) //opens new tab
        //.then(r => window.location.assign(r)) //redirects
}

function getRandomSearchResult(e){
    if(!input.value){
        getRandomResult()
    }else{
        fetch(`http://localhost:3000/${input.value}`)
            .then(r=>r.json())
            .then(r => r[Math.floor(Math.random()*r.length)])
            .then(r=> r.url)
            .then(r => window.open(r)) //opens new tab
            //.then(r => window.location.assign(r)) //redirects
    }
}