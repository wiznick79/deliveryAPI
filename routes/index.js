const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    req.body.email
})

// Redirect for 404 not found 
router.get('*', (req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

module.exports = router