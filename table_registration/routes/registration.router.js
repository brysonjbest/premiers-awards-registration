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
//const {authorizeAdmin, authorizeSuperAdmin} = require('../services/auth.services')

/**
 * Registration routes.
 */

router.post("/registrations", registrationController.registerTable);
router.post(
  "/registrations/delete/:id",
  registrationController.deleteRegistration
);
router.post("/registrations/:id", registrationController.updateTable);

router.post("/guests", registrationController.registerGuest);
router.post("/guests/delete/:id", registrationController.deleteGuest);
router.post("/guests/:id", registrationController.updateGuest);
router.get("/guests", registrationController.getAllGuests);
router.get("/registrations", registrationController.getAllRegistrations);
router.get("/registrations/:id/", registrationController.getRegistration);
router.get(
  "/registrations/:id/guests",
  registrationController.getRegistrationGuests
);

//table routes

router.post("/seating", tableController.createTable);
router.post("/seating/delete/:id", tableController.deleteTable);
router.post("/seating/generate", tableController.generateTableSetup);
router.post("/seating/deleteall", tableController.deleteAll);
router.post("/seating/:id", tableController.updateTable);

router.get("/seating", tableController.getAllTables);
router.get("/seating/:id/guests", tableController.getTableGuests);
router.get("/seating/:id/", tableController.getTable);

//settings routes
router.get("/settings", EventSettingsController.getSettings);
router.post("/settings", EventSettingsController.updateSettings);

module.exports = router;
