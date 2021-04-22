const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Index of slos')
});

router.post('/create', (req, res) => {
    res.send('Create slot')
})

router.put('/edit', (req, res) => {
    res.send('Edit slot')
})

router.delete('/delete', (req, res) => {
    res.send('Delete slot')
})

module.exports = router;