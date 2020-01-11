const express = require("express");
const router = express.Router();
const documentController = require('../controllers/document');
const checkAuth = require('../middleware/check-auth');


router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.delete("/:userId", checkAuth, UserController.user_delete);

////

router.get("/", UserController.paitient_get_all);

router.get("/", UserController.doctors_get_all);

// router.post("/", checkAuth, upload.single('productImage'), UserController.products_create_product);

router.get("/:insuranceId", UserController.get_patients_details);

router.patch("/:insuranceId", upload.single('patientDoc'), UserController.update_patients_profile);

module.exports = router;
