const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const {
  getConversations,
} = require("../controllers/conversation");


router.route("/").get(protect, getConversations);



module.exports = router;
