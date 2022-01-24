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
    const nomination = await NominationModel.findById(id);

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
    const { id=null } = req.params || {};

    // look up user by GUID
    // const user = await UserModel.findOne({guid: id});
    // if (!user)
    //   return next(Error('invalidInput'));

    // retrieve attached nominations
    const nominations = await NominationModel.find({guid: user.guid});

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
 * Create new nomination
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.create = async (req, res, next) => {
    try {
      let data = req.body;

      // insert new record into collection
      const nomination = await NominationModel.create(data);
      const { _id = '', category='', year=''} = nomination || {};

      res.status(200).json({
          id: _id,
          category: category,
          year: year,
          data: nomination
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
    let id = req.params.id;
    let data = req.body;

    // update existing document in collection
    const nomination = await NominationModel.updateOne(data);

    console.log(nomination)

    res.status(200).json({
      id: id,
      data: data
    });

  } catch (err) {
    return next(err);
  }

};

/**
 * Submit nomination
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.submit = async (req, res, next) => {

  try {
    let id = req.params.id;
    let data = req.body;

    // submit nomination document as completed
    const nomination = await NominationModel.updateOne(data);

    console.log(nomination)

    res.status(200).json({
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

    // get requested nomination ID
    let id = req.params.id;

    // look up user by GUID
    const nomination = await NominationModel.findById(id);
    if (!nomination)
      return next(Error('invalidInput'));

    // delete nomination
    const response = await NominationModel.deleteOne({_id: id})

    res.status(200).json(
      {
        id: id,
        data: response
      });

  } catch (err) {
    return next(err);
  }

};
