const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    photoUrl: {
        type: String,
        default: ''
    },
});



module.exports = Profile = mongoose.model("profile", profileSchema);
