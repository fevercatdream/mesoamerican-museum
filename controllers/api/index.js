const express = require('express');
const router = express.Router();

const artWorkRoutes = require("./artWorkRoutes");
const museumRoutes = require("./museumRoutes")
const artTypeRoutes = require("./artTypeRoutes")
const civRoutes = require("./civRoutes")

router.use("/artWorks",artWorkRoutes)
router.use("/museum",museumRoutes)
router.use('/artTypes',artTypeRoutes)
router.use('/civ',civRoutes)

module.exports = router

