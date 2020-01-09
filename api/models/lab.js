const mongoose = require('mongoose');

const labSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    patientInsuranceId:String,
    doctorInsuranceId:String,
    date:Date,
    testType:String,
    testReport:String,
    labType:String
});

module.exports = mongoose.model('Lab',labSchema)