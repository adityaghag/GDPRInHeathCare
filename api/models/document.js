const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    patientId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    doctorId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    labId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    documents:{type:String},
    comments:String
});

module.exports = mongoose.model('Appointment',documentSchema)