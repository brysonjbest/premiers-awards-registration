/*!
 * MLP.API.Services.Authentication
 * File: auth.services.js
 * Copyright(c) 2021 Runtime Software Development Inc.
 * MIT Licensed
 */

const axios = require('axios')
const UserModel = require('../models/user')

'use strict';

/**
 * Authorize user access based on permissions set for user role.
 * - validates current access token
 * - if invalid, refreshes token
 *
 * @param req
 * @param res
 * @param {Array} allowedRoles
 * @src public
 */

exports.authorize = async (req, res, next) => {

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
    let response = await axios.get('https://premiersawards.gww.gov.bc.ca/user_info', {
      headers: {
        'Cookie': `${SessionCookie} ${SMSCookie}`
      }
    });
    const {data = null} = response || {};

    // test that tokens exist
    if (!data)
      return next(new Error('noAuth'))

    res.locals.user = data;
    return next();

  } catch (err) {
    return next(err)
  }

}


/**
 * Create admin user
 *
 * @public
 * @return {String} JSON web token
 */

const createUser = async (userData) => {

  const {
    guid='',
    username='',
    firstname='',
    lastname='',
    email='',
    password='',
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
    role: role,
    password: password,
    hash: '',
    salt: ''
  });

}
exports.create = createUser;


// initialize super-administrator
createUser({
  guid: process.env.ADMIN_GUID || 'test_admin_guid',
  username: process.env.ADMIN_ID || 'test_admin',
  role: 'super-administrator'
});

