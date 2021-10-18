const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        default: '1998-06-15'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNum: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    description: {
        type: String,
    },
    photoUrl: {
        type: String,
    },
});



module.exports = Profile = mongoose.model("profile", profileSchema);
