const express = require("express");

const router = express.Router();
const programController = require("../controllers/dogController");

router.get("", programController.getDogs);

module.exports = router;
