const express = require("express");
const {getAllChats} = require("../controller/post-controller.js");
const router = express.Router();

router.get("/chat",getAllChats);

module.exports = router;
