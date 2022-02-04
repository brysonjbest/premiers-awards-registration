/*!
 * MLP.API.Services.Authentication
 * File: auth.services.js
 * Copyright(c) 2021 Runtime Software Development Inc.
 * MIT Licensed
 */

const jwt = require('jsonwebtoken');
const axios = require('axios')

'use strict';

const TOKEN_KEY = process.env.JWT_TOKEN_KEY || 'testtoken';

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
    // get current tokens
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
    console.log(response.data);


    // test that tokens exist
    if (!session)
      throw new Error('noToken');

    // validate token
    const decoded = validate(session);

    console.log(decoded)

    // if invalid, try to refresh the token
    if (!decoded) {
      throw new Error('noAuth');
    }

    return decoded;
  } catch (err) {
    return next(err)
  }

}


/**
 * Validate access token in session cookie with KeyCloak server.
 *
 * @public
 * @return {String} JSON web token
 * @param token
 */

const validate = async (token) => {

  // stop verification if no token found
  if (!token) return null;

  return jwt.verify(token, TOKEN_KEY);

}
exports.validate = validate;


/**
 * Generate JWT token
 *
 * @public
 * @param {Object} user data
 * @return access_token
 */

exports.genToken = (user) => {
  return jwt.sign(
    {user_id: user._id, email: user.email},
    process.env.TOKEN_KEY || TOKEN_KEY,
    {
      expiresIn: "2h",
    }
  );
}
