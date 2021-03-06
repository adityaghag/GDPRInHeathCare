const mongoose = require("mongoose");

const Appointment = require("../models/appointment");
const Document = require("../models/document");
const User = require("../models/user");


exports.getAllAppointmentsOfPatient = (req, res, next) => {
  Appointment.find({
    patientId: req.body.patientId
  })
    .populate('patientId doctorId')
    .exec()
    .then(docs => {
      if (docs.length >= 0) {
        const response = {
          count: docs.length,
          appointments: docs
        };
        console.log("response-------", response)
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
    doctorId: req.body.doctorId
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
      res.status(500).json({
        error: err
      });
    });
};

exports.getAppointmentDetails = (req, res, next) => {
  Appointment.find({
    _id: req.appointmentId
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
    patientId: req.body.patientId,
    doctorId: req.body.doctorId,
    categories: req.body.categories,
    date: req.body.date,
    time: req.body.time,
    day: req.body.day
  });
  appointment
    .save()
    .then(result => {
      console.log(result);
      Document.update({ patientId: req.body.patientId }, { doctorId: req.body.doctorId, })
      .exec()
      .then(result => {
        User.update({ _id: req.body.patientId }, { doctorId: req.body.doctorId, })
        .exec()
        .then(result => {
          res.status(200).json({
            message: "user added"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
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

exports.deleteAppointment = (req, res, next) => {
  const id = req.body.appointmentId
  Appointment.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Appointment Deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};





