const express = require("express");
const router = express.Router();
var fitnessRoutineModel = require('../models/fitnessRoutineModel.js');


router.get(["/", "/create"], (req, res) => {
    res.render("create");
});

router.get("/track/:id", (req, res) => {
    var id = req.params.id;
    fitnessRoutineModel.findOne({ _id: id }, function (err, fitnessRoutine) {
        console.log(fitnessRoutine);
        if (err) {
            return res.status(500).json({
                message: 'Error when getting fitnessRoutine.',
                error: err
            });
        }
        if (!fitnessRoutine) {
            return res.status(404).json({
                message: 'No such fitnessRoutine'
            });
        }
        res.render("track", { routine: fitnessRoutine });
    });




});

router.get("/choose", (req, res) => {
    fitnessRoutineModel.find(function (err, fitnessRoutines) {
        console.log(fitnessRoutines);
        if (err) {
            return res.status(500).json({
                message: 'Error when getting fitnessRoutine.',
                error: err
            });
        }
        res.render('choose', { routines: fitnessRoutines });
    });
});

router.get("/edit/:id", (req, res) => {
    var id = req.params.id;
    fitnessRoutineModel.findOne({ _id: id }, function (err, fitnessRoutine) {
        console.log(fitnessRoutine);
        if (err) {
            return res.status(500).json({
                message: 'Error when getting fitnessRoutine.',
                error: err
            });
        }
        if (!fitnessRoutine) {
            return res.status(404).json({
                message: 'No such fitnessRoutine'
            });
        }
        res.render("edit", { routine: fitnessRoutine });
    });
});

module.exports = router;