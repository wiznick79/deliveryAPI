const SlotModel = require('../models/slot')

/**
 * Get all slots
 * @param {*} req 
 * @param {*} res 
 */
async function getAllSlots(req, res) {
    try {
        var dt = new Date();
        dt.setMinutes(dt.getMinutes()+30);
        const slots = await SlotModel.find({date: { $gte: dt }, capacity : { $gte: 1}}).sort('date');
        console.log(slots);
        res.send(slots);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

/**
 * Get one slot by id
 * @param {*} req 
 * @param {*} res 
 */
async function getSlot (req, res) {
    let id = req.params.id;
    console.log(id);
    try {
        let slot = await SlotModel.findById(id);
        console.log(slot);
        res.send(slot)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

/**
 * Create a new slot
 * @param {*} req 
 * @param {*} res 
 */
async function createSlot (req, res) {
    console.log(req.body);
    const { date, capacity } = req.body;
    // Checking if the data from the form is valid
    if (!date) {
        errors = 'Please fill in all required fields';
        console.log(errors);
        res.json({type: "error", message: errors});
    }
    // Check if slot already exists
    else {
        try {
            let slot = await SlotModel.findOne({ date: date });
            // If slot exists
            if (slot) {
                errors = 'There is already a slot at that date&time';
                console.log(errors);
                res.json({type: "error", message: errors});
            }
            // Create the slot
            else {
                const newSlot = new SlotModel ({
                    date, capacity
                })
                newSlot.save()
                    .then(() => {
                        console.log(newSlot);
                        res.json({type: "success", message: "Slot created successfully."});                           
                    })
                    .catch(err => console.log(err));
            }
        } catch(err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
}

/**
 * Update a slot by id
 * @param {*} req 
 * @param {*} res 
 */
async function updateSlot (req, res) {
    console.log(req.body);
    const id = req.params.id;
    const { date, capacity } = req.body;
    // Checking if the data from the form is valid
    if (!date) {
        errors = 'Please fill in all required fields';
        console.log(errors);
        res.json({type: "error", message: errors});
    }
    else {
        try {
            let slot = await SlotModel.findOneAndUpdate(
                { _id: id }, 
                {$set: {date: date, capacity: capacity }}, 
                { new: true })
            console.log('Updated slot at ' + slot.date);
            res.json({type: "success", message: "Slot updated successfully"});
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
}

/**
 * Delete a slot by id
 * @param {*} req 
 * @param {*} res 
 */
async function deleteSlot (req, res) {
    let id = req.params.id;
    console.log('Trying to delete slot with id: ' + id);
    try {
        let slot = await SlotModel.findByIdAndDelete(id);
        console.log('Deleted slot at date: ' + slot.date);
        res.json({type: "success", message: "Slot deleted successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports = { getAllSlots, getSlot, createSlot, updateSlot, deleteSlot }