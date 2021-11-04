const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const multer = require("multer");

const {
  getConversations,
  createConversation
} = require("../controllers/conversation");


router.route("/").get(protect, getConversations);

router.route("/").post(protect, createConversation);


module.exports = router;
