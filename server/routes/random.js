//routers file

const express = require('express')
const router = express.Router()

const list = require('../data')


function getRandomLink () {
<<<<<<< HEAD
    //return list[Math.floor(Math.random()*list.length)];
=======
>>>>>>> bfa1e6da499f16ead7124382f52c7a7005a33967
    return list[0];
}

router.get('/',(req,res) =>{
    const link = getRandomLink()
    res.send(link);
})

//not used currently
router.get('/go', (req,res) =>{
    const link = getRandomLink();
    res.redirect(link.url);
})

module.exports = router;