const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const availabilitySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    start_date: {
        type: Date,
        default: Date.now
    },
    end_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Availability = mongoose.model("availability", availabilitySchema);
