const mongoose = require("mongoose");

const Appointment = require("../models/appointment");

exports.getAllAppointmentsOfPatient = (req, res, next) => {
    Appointment.find({
        patientId:req.patientId
    })
      .exec()
      .then(docs => {
        if (docs.length >= 0) {
          const response = {
            count: docs.length,
            appointments: docs
          };
            res.status(200).json(response);
          } else {
              res.status(404).json({
                  message: 'No entries found'
              });
          }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

exports.getAllAppointmentsOfDoctors = (req, res, next) => { 
    Appointment.find({
      doctorId:req.doctorId
    })
      .exec()
      .then(docs => {
        if (docs.length >= 0) {
          const response = {
            count: docs.length,
            appointments: docs
          };
            res.status(200).json(response);
          } else {
              res.status(404).json({
                  message: 'No entries found'
              });
          }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

exports.getAppointmentDetails = (req, res, next) => { 
    Appointment.find({
      _id:req.appointmentId
    })
      .exec()
      .then(docs => {
        if (docs.length >= 0) {
          const response = {
            count: docs.length,
            appointmentDetails: docs
          };
            res.status(200).json(response);
          } else {
              res.status(404).json({
                  message: 'No entries found'
              });
          }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

exports.setAppointmentDetails = (req, res, next) => { 
  const appointment = new Appointment({
    _id: new mongoose.Types.ObjectId(),
    patientId: req.patientId,
    doctorId: req.doctorId,
    categories: req.categories,
    date:req.date,
    time:req.time
  });
  appointment
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "User created"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  };
  
exports.updateAppointment = (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Appointment.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Appointment updated"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };
  

  
