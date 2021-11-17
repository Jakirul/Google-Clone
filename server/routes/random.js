//routers file

const express = require('express')
const router = express.Router()

const list = require('../data')


function getRandomLink () {
    return list[Math.floor(Math.random()*list.length)];
}

router.get('/',(req,res) =>{
    const link = getRandomLink()
    res.send(link);
})


module.exports = router;