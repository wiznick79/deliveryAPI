const express = require('express')
const router = express.Router()
const storeController = require('../controllers/store.controller')

// Get all stores
router.get('/', (req, res) => {
    storeController.getAllStores(req, res)
});
// Get a store by name
router.get('/:id', (req, res) => {
    storeController.getStore(req, res)
});
// Create new store
router.post('/create', (req, res) => {
    storeController.createStore(req.body, res);
})
// Update existing store
router.put('/update/:id', (req, res) => {
    storeController.updateStore(req, res);
})
// Delete a store
router.delete('/delete/:id', (req, res) => {
    storeController.deleteStore(req, res);
})

module.exports = router;