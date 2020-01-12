const mongoose = require("mongoose");
const pdfMake = require('../pdfmake/pdfmake');
const vfsFonts = require('../pdfmake/vfs_fonts');

pdfMake.vfs = vfsFonts.pdfMake.vfs;

exports.getLabReport = (req, res, next) => {
    Lab.find({
        patientId:req.patientId
    })
      .exec()
      .then(docs => {
        if (docs.length >= 0) {
            var documentDefinition = {
                content: [
                    `Hello ${fname} ${lname}` ,
                    'Nice to meet you!'
                ]        
            };
        
            const pdfDoc = pdfMake.createPdf(documentDefinition);
            pdfDoc.getBase64((data)=>{
                res.writeHead(200, 
                {
                    'Content-Type': 'application/pdf',
                    'Content-Disposition':'attachment;filename="filename.pdf"'
                });
        
                const download = Buffer.from(data.toString('utf-8'), 'base64');
                res.end(download);
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
      });
  };

  

  
