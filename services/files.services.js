/*!
 * File processing services
 * File: files.services.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const PDFDocument = require('pdfkit');
const fs = require('fs');
const { promises: Fs } = require('fs');
const path = require('path');
const AdmZip = require("adm-zip");
const multer = require('multer');
const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);

const dataPath = process.env.DATA_PATH || '/Users/sprose/Workspace/Docker/pa-app/data/'
const maxUploads = 5;
const acceptedMIMETypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

/**
 * File uploader middleware (multer)
 * - Uploads attached files to new directory generated for each nomination as:
 *   /data/uploads/<nomination_year>/<nomination_id>/
 * - Files are saved as:
 *   <nomination_id>_<filename>.<file_extension>
 * - Files are filtered by MIME type (see restricted types)
 *
 * @returns {Object}
 */

const uploader = multer({
    //specify diskStorage (another option is memory)
    storage: multer.diskStorage({
      //specify destination
      // pass function that will generate destination path
      destination: (req, file, callback) => {

        // initialize upload path
        const id = req.params.id;
        const year = req.params.year;
        const destination = path.join(dataPath, 'uploads', `${year}`, `${id}`);

        // ensure directory path exists
        fs.mkdir(destination, { recursive: true }, (err) => {
          if (err) throw err;
          callback(
            null,
            destination
          );
        });
      },
      // pass function that may generate unique filename if needed
      filename: (req, file, callback) => {
        let id = req.params.id;
        callback(
          null,
          `${id}_${file.originalname}`
        );
      }
    }),

    // restrict files by MIME types.
    fileFilter: function(req, file, next){
      if(!file){
        next();
      }
      const accepted = acceptedMIMETypes.includes(file.mimetype);
      if ( accepted ) {
        console.log('File attachment file format is accepted.');
        next(null, true);
      }else{
        console.log("Attachment file format not supported")
        return next();
      }
    }
  });
exports.uploader = uploader.array('file', maxUploads);


/**
 * Delete file from storage
 * @param filePath
 */

const deleteFile = async function(filePath) {
  return fs.stat(filePath, async (err) => {
    if (err == null) {
      return await Fs.unlink(filePath);
    }
    else if (err.code === 'ENOENT') {
      // file does not exist (ignore)
      console.warn(err);
      return null;
    }
    else {
      throw err;
    }
  });
}
exports.deleteFile = deleteFile;


/**
 * Generate a PDF document from JSON data
 *
 * @param jsonData
 * @param dirPath
 * @param filename
 * @param callback
 */

const createPDF = function(jsonData, dirPath, filename, callback) {

  // ensure directory path exists
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) throw err;
  });

  const doc = new PDFDocument;
  const stream = fs.createWriteStream(path.join(dirPath, filename));
  doc.pipe(stream);
  doc
    .fontSize(27)
    .text('This is a PDF document', 100, 100);
  doc.end();
  stream.on('data', callback)
  stream.on('end', callback);
}
exports.createPDF = createPDF;


/**
 * Generate a zipped archive of folders paths.
 *
 * @param filePaths
 * @param root
 * @return {Buffer}
 */

const createZIP = async function(filePaths, root) {

  // initialize zip file
  const zip = new AdmZip();

  // add listed directories
  ( filePaths || [] ).map(filePath => {
    zip.addLocalFile(filePath, root);
  });

  // toBuffer() is used to read the data and save it
  // for downloading process!
  return zip.toBuffer();
}
exports.createZIP = createZIP;


/**
 * Convert Word document to PDF format
 *
 * @param inputPath
 * @param outputPath
 */

const word2pdf = async function (inputPath, outputPath) {

  const ext = '.pdf'

  // Read file
  const docxBuf = await Fs.readFile(inputPath);

  // Convert file to pdf format with undefined filter (see Libreoffice docs about filter)
  let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);

  // Save converted file
  await Fs.writeFile(outputPath, pdfBuf);
}
exports.word2pdf = word2pdf;


/**
 * Check if file path exists.
 *
 * @param filePath
 * @return Boolean
 */

const fileExists = async function (filePath) {
  async function exists (path) {
    try {
      await Fs.access(path)
      return true
    } catch {
      return false
    }
  }
  return await exists(filePath)
}
exports.fileExists = fileExists
