/*!
 * Authentication controller
 * File: auth.controller.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const UserModel = require('../models/user');
const {genToken} = require('../services/auth.services');

/**
 * Get user profile
 *
 * @param req
 * @param res
 * @param {Function} next
 * @method post
 * @src public
 */

exports.get = async (req, res, next) => {
  try {

    const {email=''} = req.params || {};

    const user = await UserModel.findOne({ email: email }).exec();

    res.json({
      user: user
    });

  } catch (err) {
    return next(err)
  }
};

/**
 * Register new user
 *
 * @param req
 * @param res
 * @param {Function} next
 * @method post
 * @src public
 */

exports.register = async (req, res, next) => {

  try {

    const { guid, firstname, lastname, email, password,  role } = req.body;

    // Validate user input
    if (!(guid && email && password && firstname && lastname && role)) {
      throw new Error('invalidInput');
    }

    // validate if user exists in database
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      throw new Error('userExists');
    }

    // Create user in our database
    const user = await UserModel.create({
      guid,
      firstname,
      lastname,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: password,
      role
    });

    // return new user
    res.status(201).json(user);

  } catch (err) {
    return next(err);
  }

};

/**
 * Update user
 *
 * @param req
 * @param res
 * @param {Function} next
 * @method post
 * @src public
 */

// export const update = async (req, res, next) => {
//
//
// };

/**
 * Delete user
 *
 * @param req
 * @param res
 * @param {Function} next
 * @method post
 * @src public
 */

// export const remove = async (req, res, next) => {
//
//
// };

/**
 * Admin sign-in using email and password.
 *
 * @param req
 * @param res
 * @param {Function} next
 * @method post
 * @src public
 */

exports.login = async (req, res, next) => {
  try {

    if (!res.locals.user)
      return next(new Error('noAuth'))

    const { SMGOV_GUID=[null], username=[null] } = res.locals.user;

    console.log('Logging in:', SMGOV_GUID, username)

    // check if user is an administrator
    const adminUser = await UserModel.findOne({ guid : SMGOV_GUID }) || {};
    const {email='', role='nominator', firstname='', lastname=''} = adminUser || {};

    // successful login
    res.status(200).json({
        message: {msg: 'Login successful!', type: 'success'},
        user: {
          guid: SMGOV_GUID[0],
          username: username[0],
          email: email,
          role: role,
          firstname: firstname,
          lastname: lastname
        }}
    );
  }
  catch (err) {
    return next(err);
  }

};


/**
 * User sign out.
 *
 * @param req
 * @param res
 * @param {Function} next
 * @method post
 * @src public
 */

exports.logout = async (req, res, next) => {

  try {

    // // Find user with requested email
    // await UserModel.findOne({ email : req.body.email }).exec()
    //   .then(user => {
    //     if ( user === null ) {
    //       throw new Error('noLogout');
    //     }
    //     return user;
    //   });

    // successful session logout
    res.cookie("access_token", null, {httpOnly: true, sameSite: 'strict', signed: true, maxAge: 0});

    // successful login
    res.status(200).json({
      message: {msg: 'Logout successful!', type: 'success'},
      user: {}
    });
  }
  catch (err) {
    return next(err);
  }

};

/**
 * Refresh user token.
 *
 * @param req
 * @param res
 * @param {Function} next
 * @method get
 * @src public
 */

// export const refresh = async (req, res, next) => {
//
// };
