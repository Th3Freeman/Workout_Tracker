var fitnessRoutineModel = require('../models/fitnessRoutineModel.js');

module.exports = {

    list: function (req, res) {
        fitnessRoutineModel.find(function (err, fitnessRoutines) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting fitnessRoutine.',
                    error: err
                });
            }
            return res.json(fitnessRoutines);
        });
    },

    create: function (req, res) {
        console.log(req.body);
        var fitnessRoutine = new fitnessRoutineModel({
            name: req.body.name,
            exercises: req.body.exercises

        });

        fitnessRoutine.save(function (err, fitnessRoutine) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating fitnessRoutine',
                    error: err
                });
            }
            return res.status(201).json(fitnessRoutine);
        });
    },

    show: function (req, res) {
        var id = req.params.id;
        fitnessRoutineModel.findOne({ _id: id }, function (err, fitnessRoutine) {
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
            return res.json(fitnessRoutine);
        });
    },

    update: function (req, res) {
        var id = req.params.id;
        fitnessRoutineModel.findOne({ _id: id }, function (err, fitnessRoutine) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting fitnessRoutine',
                    error: err
                });
            }
            if (!fitnessRoutine) {
                return res.status(404).json({
                    message: 'No such fitnessRoutine'
                });
            }

            fitnessRoutine.name = req.body.name ? req.body.name : fitnessRoutine.name;
            fitnessRoutine.exercises = req.body.exercises ? req.body.exercises : fitnessRoutine.exercises;

            fitnessRoutine.save(function (err, fitnessRoutine) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating fitnessRoutine.',
                        error: err
                    });
                }

                return res.json(fitnessRoutine);
            });
        });
    },


    remove: function (req, res) {
        var id = req.params.id;
        fitnessRoutineModel.findByIdAndRemove(id, function (err, fitnessRoutine) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the fitnessRoutine.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
