const express = require('express')
const router = express.Router()
const slotController = require('../controllers/slot.controller')
const { ensureAuthenticated, ensureAuthenticatedAdmin } = require('../config/auth');

router.get('/', ensureAuthenticated, (req, res) => {
    slotController.getAllSlots(req, res);
});

router.get('/:id', ensureAuthenticated, (req, res) => {
    slotController.getSlot(req, res);
});

router.post('/create', ensureAuthenticatedAdmin, (req, res) => {
    slotController.createSlot(req, res);
});

router.put('/update/:id', ensureAuthenticatedAdmin, (req, res) => {
    slotController.updateSlot(req, res);
});

router.delete('/delete/:id', ensureAuthenticatedAdmin, (req, res) => {
    slotController.deleteSlot(req, res);
});

module.exports = router;