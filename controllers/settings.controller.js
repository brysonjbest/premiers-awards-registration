/*!
 * Global settings controller
 * File: settings.controller.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const GlobalModel = require('../models/global.model');

/**
 * Get global settings.
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.get = async (req, res, next) => {

  try {

    const global = await GlobalModel.findOne();

    // get linked data referenced in node tree
    return res.status(200).json(global);

  } catch (err) {
    console.error(err)
    return next(err);
  }
};

/**
 * Set global settings.
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.set = async (req, res, next) => {

  try {
    let data = req.body;
    const global = await GlobalModel.updateOne(data);

    // get linked data referenced in node tree
    return res.status(200).json(global);

  } catch (err) {
    console.error(err)
    return next(err);
  }
};
