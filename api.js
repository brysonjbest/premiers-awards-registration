'use strict';

const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const cors = require('cors');
const {notFoundHandler, globalHandler} = require('./error');
const config = require('./config.js');
const indexRouter = require('./routes/index.router');
const apiRouter = require('./routes/api.router');
const secureRouter = require('./routes/secure.router');
const frontendRouter = require('./routes/frontend.router');
const db = require('./db');
const cookieParser = require('cookie-parser');
// const helmet = require('helmet');

/**
 * Express Security Middleware
 *
 * Hide Express usage information from public.
 * Use Helmet for security HTTP headers
 * - Strict-Transport-Security enforces secure (HTTP over SSL/TLS)
 *   connections to the server
 * - X-Frame-Options provides clickjacking protection
 * - X-XSS-Protection enables the Cross-site scripting (XSS)
 *   filter built into most recent web browsers
 * - X-Content-Type-Options prevents browsers from MIME-sniffing
 *   a response away from the declared _static-type
 *   Content-Security-Policy prevents a wide range of attacks,
 *   including Cross-site scripting and other cross-site injections
 *
 *   Online checker: http://cyh.herokuapp.com/cyh.
 */

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost",
  "https://premiersawards.gww.gov.bc.ca",
  "http://pa-app-node"
];
const corsConfig = {
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        "The CORS policy for this site does not " +
        "allow access from the specified origin: \n" + origin;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// create frontend app
const frontend = express();
frontend.disable('x-powered-by');
frontend.use(express.json());
frontend.use(express.urlencoded({ extended: true }));
frontend.use(cors(corsConfig));
frontend.use(history());

frontend.use('/', express.static(path.join(__dirname, 'views')));
console.log('Serving files at ', path.join(__dirname, 'views'));
frontend.get('/', frontendRouter);

// create API app
const api = express();
api.disable('x-powered-by');
// app.use(helmet({
//   contentSecurityPolicy: false,
// }));
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(cors(corsConfig));

// apply router middleware
// - serve static frontend files
api.use('/', indexRouter);

// parse cookies to store JWT session tokens.
api.use(cookieParser(
  process.env.COOKIE_SECRET || 'testsecret'
));

// // initialize index router for API calls -> /api
// indexRouter.use('/api', apiRouter);
//
// // Initialize authentication routes
// // Plug in the JWT strategy as a middleware so only verified users can access this route.
// indexRouter.use('/auth', secureRouter);
//

//
// indexRouter.get('/', function(req, res) {
//   res.sendFile(path + "index.html");
// });
//

// handle generic errors
api.use(globalHandler);

// handle 404 errors
api.use(notFoundHandler);

// set port, listen for requests
frontend.listen(3000, () => {
  console.log(`Frontend server is running on port 3000.`);
});
api.listen(3001, () => {
  console.log(`API server is running on port 3001.`);
});
