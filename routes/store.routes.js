const express = require('express')
const router = express.Router()
const Store = require('../models/store')
const storeController = require('../controllers/store.controller')

// Get all stores
router.get('/', (req, res) => {
    res.send('Index of stores')
});
// Get a store by name
router.get('/:name', (req, res) => {
    res.send('Get a store')
});
// Create new store
router.post('/create', (req, res) => {
    storeController.createStore(req.body, res);
})
// Update existing store
router.put('/edit', (req, res) => {
    storeController.updateStore(req.body, res);
})
// Delete a store
router.delete('/delete', (req, res) => {
    storeController.deleteStore(req.body, res);
})

module.exports = router;