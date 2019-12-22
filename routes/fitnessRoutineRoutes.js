var express = require('express');
var router = express.Router();
var fitnessRoutineController = require('../controllers/fitnessRoutineController.js');

router.get('/', fitnessRoutineController.list);
router.get('/:id', fitnessRoutineController.show);
router.post('/', fitnessRoutineController.create);
router.put('/:id', fitnessRoutineController.update);
router.delete('/:id', fitnessRoutineController.remove);

module.exports = router;
