const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    doctorInsuranceId:String,
    firstName:String,
    lastName:String,
    gender:String,
    specialisation:String,
    phone:Number,
    email:String,
    numberOfYearOfExperience:Number,
    birthday:Date
});

module.exports = mongoose.model('Doctor',doctorSchema)