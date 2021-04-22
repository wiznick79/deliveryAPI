const express = require('express')
const router = express.Router()
const { ensureAuthenticated, ensureAuthenticatedAdmin } = require('../config/auth');

router.get('/', (req, res) => {
    res.send('Index of slots')
});

router.post('/create', (req, res) => {
    res.send('Create slot')
})

router.put('/update', (req, res) => {
    res.send('Update slot')
})

router.delete('/delete', (req, res) => {
    res.send('Delete slot')
})

module.exports = router;