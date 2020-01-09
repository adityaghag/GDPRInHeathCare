const mongoose = require('mongoose');

const dischargeSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    dischargeId:String,
    patientInsuranceId:String,
    doctorInsuranceId:String,
    cleaners:String,
    summary:String
});

module.exports = mongoose.model('Discharge',dischargeSchema)