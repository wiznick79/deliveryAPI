const express = require('express')
const router = express.Router()

// Logout
router.get('/', (req, res) => {
    console.log('user logged out');
    req.logout();    
    res.redirect('/login');
});

module.exports = router;