const express = require("express");
const router = express.Router();
const deliveryController = require("../controllers/delivery.controller");
const { ensureAuthenticated, ensureAuthenticatedAdmin } = require("../config/auth");

router.get("/", ensureAuthenticated, (req, res) => {
    deliveryController.getAllDeliveries(req, res);
});

router.get("/:id", ensureAuthenticated, (req, res) => {
    deliveryController.getDelivery(req, res);
});

router.post("/create", ensureAuthenticated, (req, res) => {
    deliveryController.createDelivery(req, res);
});

router.put("/update/:id", ensureAuthenticated, (req, res) => {
    deliveryController.updateDelivery(req, res);
});

router.delete("/delete/:id", ensureAuthenticated, (req, res) => {
    deliveryController.deleteDelivery(req, res);
});

module.exports = router;