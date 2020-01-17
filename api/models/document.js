const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    patientId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    doctorId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    labId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    documentFile:{type:String},
    fileName:String,
    comments:String,
    createdDate:Date
});

module.exports = mongoose.model('Document',documentSchema)