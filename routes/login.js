const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/user')

router.post('/', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    let errors = [];
    if (!email || !password){
        errors.push({ msg: 'Please fill in all required fields'})
    }
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 chars'})
    }
    if(errors.length > 0) {
        res.redirect('/')
    }
    else {
        
    }        
})

module.exports = router