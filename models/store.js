const mongoose = require('mongoose');

const Store = mongoose.model(
  "Store",
  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    horario: [{
        day: {
            type: String,
            required: true
        },
        open: {
            type: String,
            required: true
        },
        close: {
            type: String,
            required: true
        }
    }],
    created_at: {
        type: Date,
        default: Date.now
    }
  })
);

module.exports = Store;