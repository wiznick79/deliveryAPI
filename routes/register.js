const express = require('express')
const router = express.Router()
const path = require('path')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

router.post('/', (req, res) => {
    console.log(req.body)
    const { name, email, password, password2 } = req.body;
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
        res.redirect('/')
    }
    else {
        const newUser = new User ({
            name,
            email, 
            password,
        })
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                console.log(newUser)
                newUser.save()
                    .then(newUser => {
                        res.redirect('/')
                    })
                    .catch(err => console.log(err))
            })
        })        
    }        
})

module.exports = router