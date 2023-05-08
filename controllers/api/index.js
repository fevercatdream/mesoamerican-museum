const express = require('express');
const router = express.Router();

const artWorkRoutes = require("./artWorkRoutes");
const employeeRoutes = require("./employeeRoutes")
const artTypeRoutes = require("./artTypeRoutes")
const civRoutes = require("./civRoutes")
const userRoutes = require("./visitorRoutes")

router.use("/artWorks",artWorkRoutes)
router.use("/employee",employeeRoutes)
router.use('/artTypes',artTypeRoutes)
router.use('/civ',civRoutes)
router.use('/user',userRoutes)

module.exports = router

