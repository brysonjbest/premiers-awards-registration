/*!
 * MLP.API.Services.Authentication
 * File: auth.services.js
 * Copyright(c) 2021 Runtime Software Development Inc.
 * MIT Licensed
 */

const jwt = require('jsonwebtoken');

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

exports.authorize = async (req, res) => {

  // get current tokens
  const { access_token=null } = req.signedCookies || {};

  // test that tokens exist
  if ( !access_token )
    throw new Error('noToken');

  // validate token
  const decoded = validate(access_token);

  console.log(decoded)

  // if invalid, try to refresh the token
  if (!decoded) {
    throw new Error('noAuth');
  }

  return decoded;

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
