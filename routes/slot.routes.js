const express = require('express')
const router = express.Router()
const slotController = require('../controllers/slot.controller')
const { ensureAuthenticated, ensureAuthenticatedAdmin } = require('../config/auth');

router.get('/', (req, res) => {
    slotController.getAllSlots(req, res);
});

router.get('/:id', (req, res) => {
    slotController.getSlot(req, res);
});

router.post('/create', (req, res) => {
    slotController.createSlot(req, res);
})

router.put('/update/:id', (req, res) => {
    slotController.updateSlot(req, res);
})

router.delete('/delete/:id', (req, res) => {
    slotController.deleteSlot(req, res);
})

module.exports = router;