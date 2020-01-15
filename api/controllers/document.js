const mongoose = require("mongoose");
const { SyncRedactor } = require('redact-pii');
const redactor = new SyncRedactor();
var fs = require('fs');
var mammoth = require("mammoth");

const Document = require("../models/document");

exports.getAllDocumentsOfPatient = (req, res, next) => {
  console.log("req.patientId",req.body.patientId)
  Document.find({
        patientId:req.body.patientId
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

exports.uploadDocument = (req, res, next) => {
  console.log("----++++++----",req.file)
  mammoth.extractRawText({path: req.file.path})
    .then(function(result){
        var text = result.value; // The raw text 
        console.log(text);
        const redactedText = redactor.redact(text);
        console.log(redactedText);
        fs.unlink(req.file.path,function(){
        })
        fs.writeFile('./uploads/'+ req.file.filename + '', redactedText, ()=>{});
        
      const document = new Document({
      _id: new mongoose.Types.ObjectId(),
      comments: req.body.comments,
      fileName: req.body.fileName,
      documentFile: req.file.path,
      patientId:req.body.patientId
      });
      document
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "File uploaded successfully"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
    })
  };
  

  
