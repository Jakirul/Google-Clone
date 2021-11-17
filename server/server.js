const express = require('express')
const app = express()
const path = require('path')
const list = require('./data')
const cors = require('cors');

app.use(express.json())
app.use(cors());

const randomPage = require('./routes/random')
app.use('/random', randomPage);

app.get('/', (req, res) => {
    res.status(200).send(list)
})

app.post('/', (req, res) => {
    const data = req.body;
    res.status(200).send(data)
})

app.get('/:searchResult', (req, res) => {
    const searchTerm = [req.params.searchResult.toLowerCase()];
    
    const results = list.filter(item => {
        const title = item.search.toLowerCase();
        const findWords = searchTerm.map(term => {
            // This converts it to /search term here/
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


module.exports = app;