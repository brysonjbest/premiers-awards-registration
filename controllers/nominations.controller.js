/**
 * Nomination controller
 *
 * **/

const NominationModel = require('../models/nomination');
const UserModel = require('../models/user');

/**
 * Get nomination data.
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.get = async (req, res, next) => {

  try {
    const { id=null } = req.params || {};
    const nomination = await NominationModel.findOne({_id: id});

    // get linked data referenced in node tree
    return res.status(200).json(
      {
        id: id,
        data: nomination,
      });

  } catch (err) {
    console.error(err)
    return next(err);
  }
};

/**
 * Get nomination data for user.
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.getByUserID = async (req, res, next) => {

  try {
    // TODO: secure to only authenticated user nominations
    const data = req.body;
    const { guid='' } = data;
    const user = await UserModel.find({guid: guid});
    const nominations = await NominationModel.find({guid: guid});

    // get linked data referenced in node tree
    return res.status(200).json(
      {
        id: id,
        data: nominations,
      });

  } catch (err) {
    console.error(err)
    return next(err);
  }
};


/**
 * Add new nomination
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.create = async (req, res, next) => {
    try {
      let type = req.params.type;
      let data = req.body;

      // insert new record into collection
      // Create user in our database
      const nomination = await NominationModel.create(data);

      console.log(nomination)

      res.status(200).json(
        {
          view: 'add',
          type: type,
          id: nomination,
          data: data
        });

    } catch (err) {
      return next(err);
    }
  };

/**
 * Update nomination
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.update = async (req, res, next) => {

  try {

    // get requested parameters
    let type = req.params.type;
    let id = req.params.id;

    let data = req.body;

    console.log(data)

    res.status(200).json(
      {
        view: 'update',
        type: type,
        id: id,
        data: data
      });

  } catch (err) {
    return next(err);
  }

};

/**
 * Remove nomination
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.delete = async (req, res, next) => {

  try {

    // get requested parameters
    let type = req.params.type;
    let id = req.params.id;

    let data = req.body;

    console.log(data)

    res.status(200).json(
      {
        view: 'add',
        type: type,
        id: id,
        data: data
      });

  } catch (err) {
    return next(err);
  }

};
