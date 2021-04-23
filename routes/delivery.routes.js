const express = require('express')
const router = express.Router()
const deliveryController = require('../controllers/delivery.controller')
const { ensureAuthenticated, ensureAuthenticatedAdmin } = require('../config/auth');

router.get('/', (req, res) => {
    deliveryController.getAllDeliveries(req, res);
});

router.get('/:id', (req, res) => {
    deliveryController.getDelivery(req, res);
});

router.post('/create', (req, res) => {
    deliveryController.createDelivery(req, res);
})

router.put('/update/:id', (req, res) => {
    deliveryController.updateDelivery(req, res);
})

router.delete('/delete/:id', (req, res) => {
    deliveryController.deleteDelivery(req, res);
})

module.exports = router;