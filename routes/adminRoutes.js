const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");

const router = express.Router();

//Users || GET
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//Doctors || GET
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//Doctor account Status || POST
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
