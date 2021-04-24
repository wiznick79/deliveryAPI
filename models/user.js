const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "user",
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
    })
);

module.exports = User;
