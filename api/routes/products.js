const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');


const Product = require("../models/poduct")

router.get('/',(req,res,next)=>{
    Product.find({}).select('_id name price').exec().then(docs =>{
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
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name :req.body.name,
        price:req.body.price
        });
        console.log("Prod Dataaaaaaa",product)
        product.save().then(result =>{
        console.log("results------",result)
        res.status(201).json({
            message:"post req for product",
            productDetails:result
        })
    }).catch(err =>{
        console.log("errr",err)
        res.status(500).json({error:err});
    });
})

router.get('/:productId',(req,res,next)=>{
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

router.patch('/:productId',(req,res,next)=>{
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

router.delete('/:productId',(req,res,next)=>{
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