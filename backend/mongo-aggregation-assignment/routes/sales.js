const express = require("express");
const { salesManager } = require("../controller/sales.controller");
const router = express.Router();

router.get("/getSales", salesManager);

module.exports = router;
