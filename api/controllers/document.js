const mongoose = require("mongoose");
const { SyncRedactor } = require('redact-pii');
// const redactor = new SyncRedactor();
var fs = require('fs');
var mammoth = require("mammoth");
var cron = require('node-cron');

const Document = require("../models/document");
const Appointment = require("../models/appointment");

const redactor = new SyncRedactor({
  builtInRedactors: {
    digits: {
      enabled: false
    }
  }
});

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
      })
};

exports.getAllDocumentsOfDoctors = (req, res, next) => {
  Document.find({
    doctorId: req.doctorId
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
        fs.writeFile('./uploads/'+ req.body.patientId + '_' + req.file.filename + '', redactedText, ()=>{});
        
      let docPath='uploads/'+ req.body.patientId + '_' + req.file.filename + ''
      const document = new Document({
      _id: new mongoose.Types.ObjectId(),
      comments: req.body.comments,
      fileName: req.body.fileName,
      documentFile: docPath,
      patientId:req.body.patientId,
      createdDate:new Date()
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

exports.addCommentsToDocument = (req, res, next) => {
  Document.find({
        patientId:req.body.patientId
    })
      .exec()
      .then(docs => {
        if (docs.length >= 0) {
          console.log("------docs",docs)
          var content;
fs.readFile('./Index.html', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
});
console.log(content);
          res.status(200).json({
                  message: "Comment Added"
                });
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
      })
};

cron.schedule('* * * 28,29,30 * *', () => {
  exports.deleteAppointment = (req, res, next) => {
    const id = req.body.patientId
    Document.remove({ patientId: id })
      .exec()
      .then(result => {
        Appointment.remove({ patientId: id })
      .exec()
      .then(result => {
        User.remove({ _id: id })
        .exec()
        .then(result => {
          res.status(201).json({
            message: "All data is deleted of user"
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
  console.log('running a task every minute');
});


