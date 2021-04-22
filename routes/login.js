const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local', {        
        failureRedirect: '/login',
        failureFlash: true
    }), (req, res) => {
        console.log(req.user.role === "admin" ? 'Admin logged in' : 'User logged in')
        res.redirect(req.user.role === "admin" ? '/admin/dashboard' : '/user/dashboard');
    }
);

module.exports = router;