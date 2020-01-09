const mongoose = require("mongoose");

const Document = require("../models/document");

exports.getAllDocumentsOfPatient = (req, res, next) => {
    Document.find({
        patientId:req.patientId
    })
      .exec()
      .then(docs => {
        if (docs.length >= 0) {
          const response = {
            count: docs.length,
            document: docs
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

exports.getAllDocumentsOfDoctors = (req, res, next) => { 
    Document.find({
      doctorId:req.doctorId
    })
      .exec()
      .then(docs => {
        if (docs.length >= 0) {
          const response = {
            count: docs.length,
            document: docs
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

exports.uploadDocuments = (req, res, next) => { 
  const document = new Document({
    _id: new mongoose.Types.ObjectId(),
    patientId: req.patientId,
    doctorId: req.doctorId,
    labId: req.labId,
    documents:req.documents,
    comments:req.comments
  });
  document
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
  
exports.updateDocument = (req, res, next) => {
    const id = req.body.documentId;
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
  

  
