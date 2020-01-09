const mongoose = require('mongoose');

const pharmacySchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    medicalPrescription:String,
    patientInsuranceId:Number
});

module.exports = mongoose.model('Pharmacy',pharmacySchema)