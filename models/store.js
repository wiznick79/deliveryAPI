const mongoose = require('mongoose');

const Store = mongoose.model(
  "Store",
  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    horario: {
        type: Array, 
        default: []
    },
    created_at: {
        type: Date,
        default: Date.now
    }
  })
);

module.exports = Store;