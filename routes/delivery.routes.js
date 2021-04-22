const express = require('express')
const router = express.Router()
const { ensureAuthenticated, ensureAuthenticatedAdmin } = require('../config/auth');

router.get('/', (req, res) => {
    res.send('Index of deliveries')
});

router.post('/create', (req, res) => {
    res.send('Create delivery')
})

router.put('/update', (req, res) => {
    res.send('Update delivery')
})

router.delete('/delete', (req, res) => {
    res.send('Delete delivery')
})

module.exports = router;