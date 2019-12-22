var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var fitnessRoutineSchema = new Schema({
	'name' : String,
	'exercises' : Array
});

module.exports = mongoose.model('fitnessRoutine', fitnessRoutineSchema);
