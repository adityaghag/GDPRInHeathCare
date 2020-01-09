const mongoose = require('mongoose');

const emergencySchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    doctorInsuranceId:String,
    emergencyId:String,
    policeConcent:String,
    emergencyDescription:String,
    Severity:String,
    emergencyDate:Date
});

module.exports = mongoose.model('Emergency',emergencySchema)