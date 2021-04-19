const mongoose = require('mongoose');
const User = require('./user');
const Slot = require('./slot');
const Store = require('./store');
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