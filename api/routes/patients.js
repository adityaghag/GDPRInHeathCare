const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');


const Patient = require("../models/patient")

router.get('/',(req,res,next)=>{
    Patient.find({}).select('_id name price').exec().then(docs =>{
        const response={
            count:docs.length,
            product:docs
        }
        // if(docs.length >=0){
            res.status(200).json(response)
        // }else{
        //     res.status(404).json({
        //         message:'No entries found'
        //     })
        // }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({error:err})
    });
})

router.post('/',(req,res,next)=>{
    console.log("--------inside post request function------",req.body)
    const patient = new Patient({
        _id: new mongoose.Types.ObjectId(),
        patientInsuranceId :req.body.insuranceId,
        doctorInsuranceId:req.body.doctorInsuranceId,
        emergencyId:req.body.emergencyId,
        medicalDesriptionId:req.body.medicalDesriptionId,
        familySsn:req.body.familySsn,
        phone:req.body.phone,
        email:req.body.email,
        bloodGroup:req.body.bloodGroup,
        height:req.body.height,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        address:req.body.address,
        birthDate:req.body.birthDate,
        gender:req.body.gender,
        weight:req.body.weight
        });
        console.log("patient",patient)
        patient.save().then(result =>{
        console.log("results------",result)
        res.status(201).json({
            message:"post req for patient",
            patientDetails:result
        })
    }).catch(err =>{
        console.log("errr",err)
        res.status(500).json({error:err});
    });
})

router.get('/:patientId',(req,res,next)=>{
    const id =req.params.productId;
    Product.findById(id).exec().then(doc=>{
        console.log("Docs",doc)
        if(doc){
            res.status(200).json(doc)
        }else{
            res.status(404).json({message:"No Data Found"})
        }
    }).catch(err =>{
        console.log("errr",err)
        res.status(500).json({error:err});
    });
})

router.patch('/:patientId',(req,res,next)=>{
    const id = req.params.productId
    Product.update({_id:id},{
        $set : {
            name:req.body.newName,
            price:req.body.price
        }
    }).exec().then(result=>{
        console.log("results",result)
        res.status(201).json(result)
    }).catch(err=>{
        console.log("errr",err)
        res.status(500).json({error:err});
    })
})

router.delete('/:patientId',(req,res,next)=>{
    const id = req.params.productId
    Product.remove({_id:id}).exec().then(result=>{
        console.log("results",result)
        res.status(201).json(result)
    }).catch(err=>{
        console.log("errr",err)
        res.status(500).json({error:err});
    })
})

module.exports = router;