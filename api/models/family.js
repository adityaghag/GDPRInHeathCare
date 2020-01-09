const mongoose = require('mongoose');

const familySchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    firstName:String,
    lastName:String,
    insuranceID:String,
    mobileNumber:Number
});

module.exports = mongoose.model('Family',familySchema)