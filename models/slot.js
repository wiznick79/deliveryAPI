const mongoose = require("mongoose");

const Slot = mongoose.model(
    "Slot",
    new mongoose.Schema({
        date: {
            type: Date,
            required: true,
        },
        capacity: {
            type: Number,
            default: 5,
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
    })
);

module.exports = Slot;
