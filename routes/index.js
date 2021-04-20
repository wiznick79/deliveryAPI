const express = require('express')
const router = express.Router()
const path = require('path')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

router.use(express.static(path.resolve(__dirname, '../react-app/build')))

router.get('/', (req, res) => {
    res.render('index')
})

// Redirect everything else to the React app 
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'))
});

module.exports = router