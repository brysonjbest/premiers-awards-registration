/*!
 * Event Settings db model
 * File: eventsettings.model.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Event Settings schema
 */

const EventSettingsSchema = new Schema(
  {
    _id: { type: String, required: true },
    year: {
      type: Number,
    },
    salesopen: {
      type: Date,
    },
    salesclose: {
      type: Date,
    },
  },
  { timestamps: true }
);

const EventSettingsModel = mongoose.model(
  "Setting",
  EventSettingsSchema,
  "settings"
);
module.exports = EventSettingsModel;
