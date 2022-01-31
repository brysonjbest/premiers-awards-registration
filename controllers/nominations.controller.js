/**
 * Nomination controller
 *
 * **/

const NominationModel = require('../models/nomination');
const { createPDF, fileExists, createZIP } = require('../services/files.services')
const path = require('path');
const { Readable } = require('stream');

const dataPath = process.env.DATA_PATH || '/Users/sprose/Workspace/Docker/pa-app/data/'
const maxNumberOfDrafts = 10;

/**
 * Get nomination data by ID.
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

    return res.status(200).json(nomination);

  } catch (err) {
    console.error(err)
    return next(err);
  }
};

/**
 * Retrieve all nomination data.
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.getAll = async (req, res, next) => {

  try {
    const nominations = await NominationModel.find({});
    return res.status(200).json(nominations);

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
    const nominations = await NominationModel.find({guid: id});

    return res.status(200).json(nominations);

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
      const { guid='' } = data || {};

      // check if user is at limit for number of drafts
      const currentNominations = await NominationModel.find({guid: guid, submitted: false});
      if (currentNominations.length > maxNumberOfDrafts)
        return next(new Error('maxDraftsExceeded'));

      // insert new record into collection
      const nomination = await NominationModel.create(data);
      const { id=null } = nomination || {};

      // check that nomination exists
      if (!id)
        return next(new Error('noRecord'));

      res.status(200).json(nomination);

    } catch (err) {
      return next(err);
    }
  };


/**
 * Save draft nomination edits
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

    // look up nomination exists
    const nomination = await NominationModel.findById(id);
    if (!nomination)
      return next(Error('invalidInput'));

    // reject updates to submitted nominations
    if (nomination.submitted)
      return next(Error('alreadySubmitted'));

    // update existing document in collection
    const response = await NominationModel.updateOne({ _id: id }, data);
    res.status(200).json(response);
  } catch (err) {
    return next(err);
  }
};


/**
 * Submit nomination as completed
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
    const { year='' } = data || {}
    const isAdmin = true;

    // look up nomination exists
    const nomination = await NominationModel.findById(id);
    if (!nomination || !year)
      return next(new Error('invalidInput'));

    // generate downloadable PDF version
    const filename = `${id}.pdf`;
    const generatedPath = path.join(dataPath, 'generated', String(year));
    await createPDF(nomination, generatedPath, filename, console.log);

    // reject updates to submitted nominations
    if (nomination.submitted && !isAdmin)
      return next(Error('alreadySubmitted'));

    // update submission status
    data.submitted = true;

    // submit nomination document as completed
    await NominationModel.updateOne({ _id: id }, data);

    res.status(200).json(data);

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
      return next(Error('noRecord'));

    // delete nomination
    const response = await NominationModel.deleteOne({_id: id})

    res.status(200).json(response);

  } catch (err) {
    return next(err);
  }

};


/**
 * Export nomination data + attachments as compressed archive.
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.exporter = async (req, res, next) => {
  try {

    // retrieve nomination IDs
    let { ids = [], year='' } = req.body || [];

    // ensure nominations IDs are valid
    if ( ids.filter(id => { return NominationModel.findById(id) }).length !== ids.length )
      return next(new Error('InvalidInput'));

    // generate zipped archive of retrieved data
    const zipRoot = 'nomination_package';
    const data = await createZIP(ids.map(id => {
      return path.join(dataPath, 'generated', String(year), `${id}.pdf`);
    }), zipRoot);

    // create data stream and pipe to response
    res.on('error', (err) => {
      console.error('Error in write stream:', err);
    });
    let rs = new Readable();
    rs._read = () => {}; // may be redundant
    rs.pipe(res);
    rs.on('error',function(err) {
      console.error(err)
      res.status(404).end();
    });
    rs.on('error',function(err) {
      console.error(err)
      res.status(404).end();
    });
    rs.push(data);
    rs.push(null);

  } catch (err) {
    console.error(err)
    return next(err);
  }
};

/**
 * Download nomination file.
 *
 * @param req
 * @param res
 * @param next
 * @src public
 */

exports.download = async (req, res, next) => {

  try {

    let filePath = req.params.file || [];

    // check that file exists
    if (!await fileExists(filePath))
      return next(new Error('MissingFile'));

    // lookup correct file name

    res.download(filePath, 'download.pdf', function (err) {
      if (err) {
        console.error(err)
        // Handle error, but keep in mind the response may be partially-sent
        // so check res.headersSent
      } else {
        console.log(`Download for ${filePath} successful.`)
      }
    });

  } catch (err) {
    console.error(err)
    return next(err);
  }
};
