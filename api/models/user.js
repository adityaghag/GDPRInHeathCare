const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: String },
    insuranceId: {
        type: String,
        unique: true
    },
    emergencyId: { type: String },
    medicalDesriptionId: { type: Number },
    familySsn: { type: String },
    firstName: String,
    lastName: String,
    password: { type: String },
    gender: String,
    mobile: Number,
    email: {
        type: String,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    address: { type: String },
    birthDate: Date,
    bloodGroup: String,
    height: Number,
    weight: Number,
    specialisation: String,
    numberOfYearOfExperience: Number,
    patientDoc: { type: String },
    doctorsId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    accessToken: {
        type: String,
        // index: true
    },
    userType: {
        type: String,
        default: "Patient",
        enum: ['Patient', 'Doctor','Lab','Admin'],
        required: true
    },
    doctorsComment: {
        doctorsId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comment: { type: String }
    }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema)