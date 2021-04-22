const express = require('express')
const router = express.Router()
const Store = require('../models/store')
const storeController = require('../controllers/store.controller')

router.get('/', (req, res) => {
    res.send('Index of stores')
});

router.post('/create', (req, res) => {
    storeController.createStore(req.body, res);
})

router.put('/edit', (req, res) => {
    storeController.updateStore(req.body, res);
})

router.delete('/delete', (req, res) => {
    storeController.deleteStore(req.body, res);
})

module.exports = router;