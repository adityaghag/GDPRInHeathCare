const mongoose = require('mongoose');

const operationSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    patientInsuranceId:String,
    doctorInsuranceId:String,
    operationType:String,
    operationDate:Date
});

module.exports = mongoose.model('Operation',operationSchema)