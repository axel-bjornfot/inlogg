const express = require("express");

const router = express.Router();
const programController = require("../controllers/memeController");

router.get("", programController.getMemes);

module.exports = router;
