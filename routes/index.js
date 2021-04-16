const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('*', (req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

module.exports = router