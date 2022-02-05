/*!
 * Database initialization
 * File: db.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const mongoose = require("mongoose");

// Database configuration settings
const protocol = 'mongodb://'
const databaseHost = process.env.DATABASE_HOST || 'localhost';
const databasePort = process.env.DATABASE_PORT || 27017;
const databaseUser = process.env.DATABASE_USER || "root";
const databasePassword = process.env.DATABASE_PASSWORD || "rootpassword";
// const databaseConnectionOpts = process.env.DATABASE_CONNECTION_OPTIONS || '';
const databaseName = process.env.DATABASE_NAME || 'premiersawards';

// define database connection URI
// const uri = `${protocol}${encodeURIComponent(databaseUser).trim()}:${encodeURIComponent(databasePassword).trim()}@${databaseHost}:${databasePort}/${databaseName}?${databaseConnectionOpts}`;

// create db connection
mongoose.connect(`${protocol}${databaseHost}:${databasePort}/${databaseName}`, {
  auth: {
    username: databaseUser,
    password: databasePassword
  },
  authSource: process.env.DATABASE_NAME || 'admin',
  useUnifiedTopology: true,
  useNewUrlParser: true
}, (err)=>{ if (err) console.error(err); });

// Bind connection to error event (to get notification of connection errors)
// mongoose.connection.on('error',
//   console.error.bind(console, 'MongoDB connection error:')
// );

// Connect to MongoDB
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB @ 27017');
});
