// index
function getAllCats(){
    fetch('http://localhost:3000/')
        .then(r => r.json())
        .then(appendCats)
        .catch(console.warn)
    
};

// create
function submitCat(e){
    e.preventDefault();

    const catData = {
        search: e.target.search.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(catData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(`http://localhost:3000/`, options)
        .then(r => r.json())
        .then(appendCat)
        .catch(console.warn)
};

// helpers
function appendCats(cats){
    cats.forEach(appendCat);
};

function appendCat(catData){
    // const newLi = document.createElement('p');
    const aTag = document.createElement("a");


    // aTag.append(newLi)
    aTag.textContent = `Search: ${catData.search} `
    aTag.setAttribute("href", `http://localhost:3000/search?q=${catData.search}`)
    // const catsList = document.querySelector('ul');
    // document.body.append(newLi)
    document.body.append(aTag)
    // catsList.append(newLi);
    // catsList.append(aTag)
};

// helpers
function appendCats(cats){
    cats.forEach(appendCat);
};

function appendCat(catData){
    console.log(catData.body)
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${catData.name} || Age: ${catData.age}`
    const catsList = document.querySelector('ul');
    catsList.append(newLi);
};

function renderMessage(data){
    
    data.forEach(data => {
        const h2 = document.createElement('h2');
        const h3 = document.createElement("h3")
        const h4 = document.createElement("h4");

        h2.textContent = data.search;
        h3.textContent = data.description;
        h4.textContent = data.url;

        h2.style.color = 'red';
        document.body.append(h2);
        document.body.append(h3);
        document.body.append(h4);
       
    })
};