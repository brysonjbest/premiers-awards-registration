/**
 * Administration controller
 *
 * **/

const GlobalModel = require('../models/global');
const NominationModel = require('../models/nomination')

/**
 * Get global settings.
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.settings = async (req, res, next) => {

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
 * Get nomination data.
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.update = async (req, res, next) => {

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

/**
 * Generate nomination package for adjudicator.
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.download = async (req, res, next) => {

  try {
    // TODO: secure to only authenticated user nominations
    const { id=null } = req.params || {};

    // look up user by GUID
    // const user = await UserModel.findOne({guid: id});
    // if (!user)
    //   return next(Error('invalidInput'));

    // retrieve attached nominations
    const nominations = await NominationModel.find({guid: id});

    // get linked data referenced in node tree
    return res.status(200).json(nominations);

  } catch (err) {
    console.error(err)
    return next(err);
  }

};
