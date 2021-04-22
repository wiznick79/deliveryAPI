const express = require('express')
const router = express.Router()
const passport = require('passport');
const userController = require('../controllers/user.controller')
const { ensureAuthenticated, ensureAuthenticatedAdmin } = require('../config/auth');


// Login
router.post('/login', passport.authenticate('local', {        
    failureRedirect: '/user/login',
    failureFlash: true
    }), (req, res) => {
        console.log(req.user.role === "admin" ? 'Admin logged in' : 'User logged in')
        res.redirect(req.user.role === "admin" ? '/admin/dashboard' : '/user/dashboard');
    }
);

// Logout
router.use('/logout', ensureAuthenticated, (req, res) => {
    userController.logoutUser(req, res);
});

// Register
router.post('/register', (req, res) => {
    userController.registerUser(req, res);
});

module.exports = router;