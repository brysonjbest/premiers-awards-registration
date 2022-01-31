/**
 * Files (nomination attachments) controller
 *
 * **/

const NominationModel = require('../models/nomination');

/**
 * Upload attachment files
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.upload = async (req, res, next) => {

  try {
    let id = req.params.id;
    let metadata = req.body;
    const { files=[] } = req || {};

    // look up nomination exists
    const nomination = await NominationModel.findById(id);
    if (!nomination)
      return next(Error('invalidInput'));

    // reject updates to submitted nominations
    // if (nomination.submitted)
    //   return next(Error('alreadySubmitted'));

    // update attachment metadata
    const attachmentData = files.map((file, index) => {
        return {
          file: file,
          label: metadata.label[index],
          description: metadata.description[index]
        }
      });

    // update existing document in collection
    const response = await NominationModel.updateOne(
      { _id: id },
      { attachments: attachmentData }
    );

    res.status(200).json(response);

  } catch (err) {
    return next(err);
  }

};
