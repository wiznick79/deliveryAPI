const express = require('express')
const router = express.Router()
const path = require('path')
const { ensureAuthenticated, ensureAuthenticatedAdmin } = require('../config/auth');

router.use(express.static(path.resolve(__dirname, '../react-app/build')))

// Redirect to the React app 
router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
});
router.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
});
router.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
});
router.get('/user*', ensureAuthenticated, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
});
router.get('/admin*', ensureAuthenticatedAdmin, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
});
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
});

module.exports = router;