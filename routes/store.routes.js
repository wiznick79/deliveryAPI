const express = require('express')
const router = express.Router()
const storeController = require('../controllers/store.controller')
const { ensureAuthenticated, ensureAuthenticatedAdmin } = require('../config/auth');

// Get all stores
router.get('/', ensureAuthenticated, (req, res) => {
    storeController.getAllStores(req, res)
});
// Get a store by name
router.get('/:id', ensureAuthenticated, (req, res) => {
    storeController.getStore(req, res)
});
// Create new store
router.post('/create', ensureAuthenticatedAdmin, (req, res) => {
    storeController.createStore(req, res);
})
// Update existing store
router.put('/update/:id', ensureAuthenticatedAdmin, (req, res) => {
    storeController.updateStore(req, res);
})
// Delete a store
router.delete('/delete/:id', ensureAuthenticatedAdmin, (req, res) => {
    storeController.deleteStore(req, res);
})

module.exports = router;