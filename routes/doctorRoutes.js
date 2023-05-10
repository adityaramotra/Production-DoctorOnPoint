const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateAppointmentStatusController,
} = require("../controllers/doctorCtrl");

const router = express.Router();

//Single doctor info || POST
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//update doctor profile || POST
router.post("/updateProfile", authMiddleware, updateProfileController);

//get single doctor info
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//get appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

//update appointment status
router.post(
  "/update-appointment-status",
  authMiddleware,
  updateAppointmentStatusController
);

module.exports = router;
