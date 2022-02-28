const express = require("express")
const router = express.Router()
const controller = require("../controllers")

router.get("/dtsbrokers", controller.dtsbrokers)

module.exports = router
