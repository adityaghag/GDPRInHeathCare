const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    patientId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    doctorId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date:Date,
    categories:String,
    time:Date
});

module.exports = mongoose.model('Appointment',appointmentSchema)