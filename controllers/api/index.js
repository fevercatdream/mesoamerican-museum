const express = require('express');
const router = express.Router();

const artWorkRoutes = require("./artWorkRoutes");
const museumRoutes = require("./museumRoutes")

router.use("/artWorks",artWorkRoutes)
router.use("/museum",museumRoutes)

module.exports = router

