const express = require('express');
const router = express.Router();

const artWorkRoutes = require("./artWorkRoutes");

router.use("/artWorks",artWorkRoutes)

module.exports = router

