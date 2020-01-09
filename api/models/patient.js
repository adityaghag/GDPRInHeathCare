const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    patientInsuranceId:Number,
    doctorInsuranceId:Number,
    emergencyId:Number,
    medicalDesriptionId:Number,
    familySsn:Number,
    phone:Number,
    email:String,
    bloodGroup:String,
    height:Number,
    firstName:String,
    lastName:String,
    address:String,
    birthDate:Date,
    gender:String,
    weight:Number
});

module.exports = mongoose.model('Patient',patientSchema)