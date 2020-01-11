const mongoose = require('mongoose');

const medicalDescriptionSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    medicalDescriptionID:String,
    patientInsuranceId:String,
    doctorInsuranceId:String,
    Description:String
});

module.exports = mongoose.model('MedicalDescription',medicalDescriptionSchema)