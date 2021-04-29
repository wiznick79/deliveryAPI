const DeliveryModel = require("../models/delivery");
const SlotModel = require("../models/slot");
const UserModel = require("../models/user");
const StoreModel = require("../models/store");

/**
 * Get all deliveries
 * @param {*} req
 * @param {*} res
 */
async function getAllDeliveries(req, res) {
    try {
        const deliveries = await DeliveryModel.find({});
        console.log(deliveries);
        res.send(deliveries);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

/**
 * Get one delivery by id
 * @param {*} req
 * @param {*} res
 */
async function getDelivery(req, res) {
    let id = req.params.id;
    console.log(id);
    try {
        DeliveryModel.findById(id)
            .populate("user", "name")
            .populate("store", "name")
            .populate("slot", "date")
            .exec((_err, delivery) => {
                console.log(delivery);
                res.send(delivery);
            });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

/**
 * Create a new delivery
 * @param {*} req
 * @param {*} res
 */
async function createDelivery(req, res) {
    console.log(req.body);
    var { user, store, slot } = req.body;
    // Client posts date for slot, so we find the slot with that date and get its id
    let newSlot = await SlotModel.findOne({date: slot});
    let slotDate = newSlot.date;
    slot = newSlot._id;
    // Checking if the data from the form is valid
    if (!user || !store || !slot) {
        let errors = "Please fill in all required fields";
        console.log(errors);
        res.json({type: "error", message: errors});
    }
    else {        
        // Check if delivery already exists
        try {
            let delivery = await DeliveryModel.findOne({
                user: user,
                slot: slot,
            });
            // If delivery exists
            if (delivery) {
                let errors = "There is already a delivery for the user at that date&time";
                console.log(errors);
                res.json({type: "error", message: errors});
            }
            // Create the delivery
            else {
                const newDelivery = new DeliveryModel({
                    user,
                    store,
                    slot,
                });
                newDelivery
                    .save()
                    .then(() => {
                        DeliveryModel.find({ _id: newDelivery.id })
                            .populate("user", "name")
                            .populate("store", "name")
                            .populate("slot", "date")
                            .exec((err, delivery) => {
                                console.log(delivery);                                
                                res.json({type: "success", message: `Delivery created successfully on ${slotDate.toLocaleString('pt-PT')}`});
                            });
                    })
                    .catch((err) => console.log(err));
            }
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
}

/**
 * Update a delivery by id
 * @param {*} req
 * @param {*} res
 */
async function updateDelivery(req, res) {
    console.log(req.body);
    const id = req.params.id;
    const { user, store, slot } = req.body;
    // Checking if the data from the form is valid
    if (!user || !store || !slot) {
        errors = "Please fill in all required fields";
        console.log(errors);
        res.send(errors);
    } else {
        try {
            let delivery = await DeliveryModel.findOneAndUpdate(
                { _id: id },
                { $set: { user: user, store: store, slot: slot } },
                { new: true }
            );
            console.log("Updated delivery with id " + delivery.id);
            res.send(delivery);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
}

/**
 * Delete a delivery by id
 * @param {*} req
 * @param {*} res
 */
async function deleteDelivery(req, res) {
    let id = req.params.id;
    console.log("Trying to delete delivery with id: " + id);
    try {
        let delivery = await DeliveryModel.findByIdAndDelete(id);
        let msg = "Deleted delivery with id: " + delivery.id;
        console.log(msg);
        res.send(msg);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports = {
    getAllDeliveries,
    getDelivery,
    createDelivery,
    updateDelivery,
    deleteDelivery,
};
