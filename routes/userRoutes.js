const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//1.login || post
router.post("/login", loginController);

//2.register || post
router.post("/register", registerController);

//3.Auth || post
router.post("/getUserData", authMiddleware, authController);

//4.Apply Doctor || post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//5.Notification || post
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//6.Notification || post
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//7.Get all doctors || GET
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//8.Book appointment
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//9.Check availability
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

//10.Appointments list
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
