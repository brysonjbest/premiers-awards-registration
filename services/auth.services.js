/*!
 * Authentication services
 * File: auth.services.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const axios = require('axios');
const UserModel = require('../models/user.model');
const NominationModel = require('../models/nomination.model')
const AttachmentModel = require('../models/attachment.model')
const proxyURL = 'https://premiersawards.gww.gov.bc.ca';

'use strict';

/**
 * Authenticate user based on IDIR credentials.
 * - retrieves current session data from SAML authenticator
 * - returns user data to client in session cookies
 *
 * @param req
 * @param res
 * @param {Array} allowedRoles
 * @src public
 */

exports.authenticate = async (req, res, next) => {

  try {
    // get current user data (if authenticated)
    const {session = null, SMSESSION=''} = req.cookies || {};
    let date = new Date();
    const expDays = 1;
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    const SMSCookie = "SMSESSION=" + SMSESSION + "; " + expires + "; path=/; HttpOnly; Secure=true;";
    const SessionCookie = "session=" + session + "; " + expires + "; path=/; HttpOnly; Secure=true;";
    // res.cookie("session", token, {httpOnly: true, secure: true, sameSite: 'strict', signed: true});

    // call SAML API - user data endpoint
    let response = await axios.get(`${proxyURL}/user_info`, {
      headers: {
        'Cookie': `${SessionCookie} ${SMSCookie}`
      }
    });
    const {data = null} = response || {};
    const { SMGOV_GUID=[null], username=[null] } = data;

    // test that tokens exist
    if (!data)
      return next(new Error('noAuth'));

    // reformat user data
    const userData = {
      guid: SMGOV_GUID[0],
      username: username[0]
    };

    // check if user is an administrator
    const adminUserData = await UserModel.findOne({guid: userData.guid});

    console.log(userData, adminUserData)

    // store user data in response for downstream middleware
    res.locals.user = adminUserData || userData;
    return next();

  } catch (err) {
    return next(err)
  }

}

/**
 * Authorize user access based on ID submitted.
 *
 * @param req
 * @param res
 * @param {Array} allowedRoles
 * @src public
 */

exports.authorizeData = async (req, res, next) => {
  try {
    if (res.locals.user.role === 'administrator'
      || res.locals.user.role === 'super-administrator') {
      return next();
    }
    const {id = null} = req.params || {};
    const nomination = await NominationModel.findById(id);
    const {guid=''} = nomination || {};
    if (res.locals.user.guid === guid) {
      return next();
    }
    else {
      return next(new Error('noAuth'));
    }
  } catch (err) {
    return next(err)
  }
}

/**
 * Authorize user access based on attachment ID submitted.
 *
 * @param req
 * @param res
 * @param {Array} allowedRoles
 * @src public
 */

exports.authorizeAttachment = async (req, res, next) => {
  try {
    if (res.locals.user.role === 'administrator'
      || res.locals.user.role === 'super-administrator') {
      return next();
    }
    const {id = null} = req.params || {};
    const attachment = await AttachmentModel.findById(id);
    const nomination = await NominationModel.findById(attachment.nomination || '');
    const { guid='' } = nomination || {};
    if (res.locals.user.guid === guid) {
      return next();
    }
    else {
      return next(new Error('noAuth'));
    }
  } catch (err) {
    return next(err)
  }
}

/**
 * Authorize user access based on GUID submitted.
 *
 * @param req
 * @param res
 * @param {Array} allowedRoles
 * @src public
 */

exports.authorizeUser = async (req, res, next) => {
  try {
    const {guid = null} = req.params || {};
    if (
      res.locals.user.guid === guid
      || res.locals.user.role === 'administrator'
      || res.locals.user.role === 'super-administrator') {
      return next();
    }
    else {
      return next(new Error('noAuth'));
    }
  } catch (err) {
    return next(err)
  }
}

/**
 * Authorize user access based on user privileges.
 *
 * @param req
 * @param res
 * @param {Array} allowedRoles
 * @src public
 */

exports.authorizeAdmin = async (req, res, next) => {
  if (res.locals.user.role === 'administrator'
    || res.locals.user.role === 'super-administrator') {
    next();
  }
  else {
    return next(new Error('noAuth'));
  }
}
exports.authorizeSuperAdmin = async (req, res, next) => {
  console.log(res.locals.user.role)
  if (res.locals.user.role === 'super-administrator') {
    next();
  }
  else {
    return next(new Error('noAuth'));
  }
}

/**
 * Create admin user
 *
 * @public
 * @return {Promise}
 */

const createUser = async (userData) => {

  const {
    guid=null,
    username=null,
    firstname='',
    lastname='',
    email='',
    role='nominator'
  } = userData || {};

  // TODO: validate user data here

  // Validate user input
  if (!(guid && username && role)) {
    throw new Error('invalidInput');
  }

  // validate if user exists in database
  const existingUser = await UserModel.findOne({ guid: guid });
  if (existingUser) {
    throw new Error('userExists');
  }

  // Create user in our database
  return await UserModel.create({
    guid: guid,
    username: username,
    firstname: firstname,
    lastname: lastname,
    email: email.toLowerCase(),
    role: role
  });

}
exports.create = createUser;

/**
 * Initialize users collection
 * - creates default super-admin user (if none exists)
 */

const initUsers = async() => {
  if (!process.env.ADMIN_GUID || !process.env.ADMIN_ID) {
    console.warn('Default super-administrator not initialized.');
    return;
  }
  const user = await UserModel.findOne({guid: process.env.ADMIN_GUID});
  if (!user) {
    await createUser({
      guid: process.env.ADMIN_GUID,
      username: process.env.ADMIN_ID,
      role: 'super-administrator'
    });
    console.log('Default super-administrator created.');
  } else {
    console.log('Default super-administrator initialized.');
  }
}
initUsers().catch(console.error);

