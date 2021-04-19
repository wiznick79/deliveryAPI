const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const Delivery = mongoose.model(
  "Delivery",
  new mongoose.Schema({
    client: {
        type: ObjectId,
        ref: 'User'
    },
    slot: {
        type: ObjectId,
        ref: 'Slot'
    },
    store: {
        type: ObjectId,
        ref: 'Store'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
  })
);

module.exports = Delivery;