const express = require('express')
const app = express()
const path = require('path')
const list = require('./data')
const cors = require('cors');


app.use(express.json())
app.use(cors());
app.get('/', (req, res) => {
    res.send(list)
    // res.sendFile((path.join(__dirname, '../client/index.html')))

})

app.post('/', (req, res) => {
    const data = req.body;
    res.status(201).send(data)
})



app.get('/:searchResult', (req, res) => {
    let searchTerm = req.params.searchResult;

    // This converts my string (searchTerm) into an array/object. I split it by - because theres no - in my string so it would turn that
    // entire string into one array value.
    // Now i could map over it below and use very simple regex to match the title accordingly with the list of searches in ./data
    const searchTerm2 = searchTerm.toLowerCase().split('-');
    
    const results = list.filter(item => {
        const title = item.search.toLowerCase();
        const findWords = searchTerm2.map(term => {
            // This conerts it to /search term here/
            let myPattern = new RegExp(`${term}`);
            return title.match(myPattern);
        });
        
        return findWords[0] !== null;
    });


    if (results.length){
        res.send(results);
    } else {
        res.status(404).send({error: `No results found for ${searchTerm}`})
    }
});

app.get('/:id', (req, res) => {

    res.send("in search")
//     //Holds value of the query param 'searchquery'.
//       const searchQuery = req.params.id;
//       console.log(searchQuery)
  
//     //Do something when the searchQuery is not null.
//     if(searchQuery != null){
//         res.send(`in the page: ${searchQuery}`)
//     }else{
//       res.end();
//     }
  });


module.exports = app;