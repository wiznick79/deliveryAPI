const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Index of deliveries')
});

router.post('/create', (req, res) => {
    res.send('Create delivery')
})

router.put('/edit', (req, res) => {
    res.send('Edit delivery')
})

router.delete('/delete', (req, res) => {
    res.send('Delete delivery')
})

module.exports = router;