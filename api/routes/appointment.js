const express = require("express");
const router = express.Router();
const appointmentController = require('../controllers/appointment');
const checkAuth = require('../middleware/check-auth');


router.post("/getAllAppointmentsOfPatient", appointmentController.getAllAppointmentsOfPatient);

router.post("/getAllAppointmentsOfDoctors", appointmentController.getAllAppointmentsOfDoctors);

router.post("/getAppointmentDetails", appointmentController.getAppointmentDetails);

router.post("/setAppointmentDetails", appointmentController.setAppointmentDetails);

router.post("/updateAppointment", appointmentController.updateAppointment);



module.exports = router;
