const express = require("express")
const router = express.Router()
const controller = require("../controllers")

router.post("/dtsbrokers", controller.dtsbrokers)
router.post("/dts", controller.dts)

module.exports = router
