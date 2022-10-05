/*!
 * Registration router
 * File: registration.router.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registration.controller");
const tableController = require("../controllers/table.controller");
const EventSettingsController = require("../controllers/eventsettings.controller");
const {
  authorizeAdmin,
  authorizeSuperAdmin,
} = require("../../services/auth.services");

/**
 * Registration routes.
 */

router.post(
  "/registrations",
  authorizeUser,
  registrationController.registerTable
);
router.post(
  "/registrations/delete/:id",
  authorizeUser,

  registrationController.deleteRegistration
);
router.post(
  "/registrations/:id",
  authorizeUser,
  registrationController.updateTable
);

router.post("/guests", authorizeUser, registrationController.registerGuest);
router.post(
  "/guests/delete/:id",
  authorizeUser,
  registrationController.deleteGuest
);
router.post("/guests/:id", authorizeUser, registrationController.updateGuest);
router.get("/guests", authorizeUser, registrationController.getAllGuests);
router.get(
  "/registrations",
  authorizeUser,
  registrationController.getAllRegistrations
);
router.get(
  "/registrations/:id/",
  authorizeUser,
  registrationController.getRegistration
);
router.get(
  "/registrations/:id/guests",
  authorizeUser,
  registrationController.getRegistrationGuests
);

router.post("/seating", authorizeAdmin, tableController.createTable);
router.post("/seating/delete/:id", authorizeAdmin, tableController.deleteTable);
router.post(
  "/seating/generate",
  authorizeAdmin,
  tableController.generateTableSetup
);
router.post("/seating/deleteall", authorizeAdmin, tableController.deleteAll);
router.post("/seating/:id", authorizeAdmin, tableController.updateTable);

router.get("/seating", authorizeAdmin, tableController.getAllTables);
router.get(
  "/seating/:id/guests",
  authorizeAdmin,
  tableController.getTableGuests
);
router.get("/seating/:id/", authorizeAdmin, tableController.getTable);

//settings routes
router.get("/settings", authorizeAdmin, EventSettingsController.getSettings);
router.post(
  "/settings",
  authorizeAdmin,
  EventSettingsController.updateSettings
);

module.exports = router;
