const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    birth_date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_num: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
    },
    description: {
        type: String,
    }
});



module.exports = Profile = mongoose.model("profile", profileSchema);
