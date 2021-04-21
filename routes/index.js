const express = require('express')
const router = express.Router()
const path = require('path')
const { ensureAuthenticated } = require('../config/auth');

router.get('/user', ensureAuthenticated, (req, res) => {
    console.log('test')
    res.redirect('/user/dashboard')
});

//router.use(express.static(path.resolve(__dirname, '../react-app/build')))

router.get('/', (req, res) => {
    res.render('index')
})
/*
// Redirect everything else to the React app 
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
});
*/
module.exports = router;