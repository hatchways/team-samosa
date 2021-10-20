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
    gender: {
        type: String,
        default: 'male'
    },
    birthDate: {
        type: Date,
        default: '1998-06-15'
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
