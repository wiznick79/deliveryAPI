const express = require('express')
const router = express.Router()
const path = require('path')

router.use(express.static(path.resolve(__dirname, '../react-app/build')))

router.get('/', (req, res) => {
    res.render('index')
})
/*
router.get('/login', (req, res) => {
    res.render('login')
})
*/
router.post('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
})
/*
router.get('/register', (req, res) => {
    res.render('register')
})
*/
router.post('/register', (req, res) => {
    console.log(req.body)
    const { name, email, password, password2 } = req.body;
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(password2)
    let errors = [];
    if (!name || !email || !password || !password){
        errors.push({ msg: 'Please fill in all required fields'})
    }
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match'})
    }
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 chars'})
    }
    if(errors.length > 0) {
        res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
    }
    else {
        res.redirect('/')
    }
    
    
})

// Redirect everything else to the React app 
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
});

module.exports = router