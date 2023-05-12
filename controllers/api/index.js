const express = require('express');
const router = express.Router();

const artWorkRoutes = require("./artWorkRoutes");
const employeeRoutes = require("./employeeRoutes")
const artTypeRoutes = require("./artTypeRoutes")
const civRoutes = require("./civRoutes")
const visitorRoutes = require("./visitorRoutes")
const likeRoutes = require("./likeRoutes")

router.use("/artWorks",artWorkRoutes)
router.use("/employee",employeeRoutes)
router.use('/artTypes',artTypeRoutes)
router.use('/civ',civRoutes)
router.use('/visitor',visitorRoutes)
router.use('/likes',likeRoutes)

module.exports = router

