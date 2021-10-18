const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    },
    startDate: {
        type: Date,
        required: true,
        unique: true
    },
    endDate: {
        type: Date,
        required: true,
        unique: true
    }
});

module.exports = Availability = mongoose.model("availability", availabilitySchema);
