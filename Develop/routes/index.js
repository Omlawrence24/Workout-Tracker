const router = require('express').Router();
const apiRoutes = require('./api');
const path = require("path")

router.use("/api", apiRoutes);

router.get("/exercise", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})


router.get("/stats", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})


module.exports = router;
