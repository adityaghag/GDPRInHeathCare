const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = (req, res, next) => {
  console.log("-----########",req.body)
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          console.log(req.body.password)
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            let uid;
            let userData;
            if(req.body.userType==='Lab'){
              uid="LI" + new Date().valueOf();
              userData={
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash,
                userType: req.body.userType,
                userId:uid
              }
            }else if(req.body.userType==='Doctor'){
              uid="DI" + new Date().valueOf();
              userData={
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash,
                userType: req.body.userType,
                userId:uid,
                doctorsCategory:req.body.category,
                firstName: req.body.firstName,
                lastName: req.body.lastName
              }
            }else{
              console.log("-----##Patient ######")
              uid="PI" + new Date().valueOf();
              userData={
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
              userType: req.body.userType,
              userId:uid,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              address: req.body.address,
              gender: req.body.gender,
              mobile: req.body.phonenum,
              insuranceId: req.body.insurancenum,
              birthDate: req.body.birthDate
              }
            }
            console.log("Inside new user block ",userData)
            const user = new User(userData);
            user
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
          }
        });
      }
    });
};

exports.user_login = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token,
            userType:user[0].userType,
            userId:user[0]._id
          });
        }
        res.status(401).json({
          message: "Auth failed"
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

exports.user_delete = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

//////////

exports.paitient_get_all = (req, res, next) => {
  User.find({
    userType: 'Patient'
  })
    //   .select("name price _id productImage")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.doctors_by_cat = (req, res, next) => {
  console.log("Docssss--sdadasdad----",req.body)

  User.find({
    userType: 'Doctor',
    doctorsCategory:req.body.docCat
  })
    .exec()
    .then(docs => {
      console.log("Docssss------",docs)
      const response = {
        count: docs.length,
        data: docs
      };
        if (docs.length >= 0) {
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

exports.get_patients_details = (req, res, next) => {
  const id = req.params.insuranceId;
  User.findById(id)
    //   .select("name price _id productImage")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          product: doc
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.update_patients_profile = (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  User.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/" + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};



