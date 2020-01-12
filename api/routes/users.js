const express = require("express");
const router = express.Router();
const multer = require('multer');
const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

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
