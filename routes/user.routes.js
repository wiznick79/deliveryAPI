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

router.get('/', (req, res) => {
    if (req.user)
        res.status(200).send({id: req.user.id, name: req.user.name, email: req.user.email, role: req.user.role});
    else res.status(401).send("There is no user currently logged in")
})
/*
router.use('/user/dashboard', ensureAuthenticated, (req, res) => {
    res.redirect('/user/dashboard');
});
*/
module.exports = router;