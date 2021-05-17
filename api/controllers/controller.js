const router = require('express').Router();

const commerceModel = require('../models/commerce/commerceModel')

router.get('/', (req,res) => {
    res.send('ett svar')
})

router.post('/', (req,res) => {
    res.send('ett svar')
})



module.exports = router;