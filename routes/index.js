const express = require('express')
const router = express.Router()
const path = require('path')

router.use(express.static(path.resolve(__dirname, '../react-app/build')))

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

// Redirect everything else to the React app 
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
});

module.exports = router