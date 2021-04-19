const mongoose = require('mongoose');

const Store = mongoose.model(
  "Store",
  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    open: {
        type: Date,
        required: true
    },
    close: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
  })
);

module.exports = User;