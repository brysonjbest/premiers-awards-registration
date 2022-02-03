'use strict';

const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
const cors = require('cors');
const {notFoundHandler, globalHandler} = require('./error');
const config = require('./config.js');
const indexRouter = express.Router();
const apiRouter = require('./routes/api.router');
const secureRouter = require('./routes/secure.router');
const db = require('./db');
const cookieParser = require('cookie-parser');
// const helmet = require('helmet');

app.use(history());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get subdirectory for nominations
const slug = '/nominations';

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

app.disable('x-powered-by');
// app.use(helmet({
//   contentSecurityPolicy: false,
// }));

const allowedOrigins = [
  "http://localhost:8080",
  "http://localhost:8081",
  "http://localhost",
  "https://premiersawards.gww.gov.bc.ca",
  "http://pa-app-node"
];

app.use(cors({
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
  })
);

/**
 * Parse cookies to store JWT session tokens.
 */

app.use(cookieParser(
  process.env.COOKIE_SECRET || 'testsecret'
));

// initialize index router for API calls -> /api
indexRouter.use('/api', apiRouter);

// Initialize authentication routes
// Plug in the JWT strategy as a middleware so only verified users can access this route.
indexRouter.use('/auth', secureRouter);

app.use(config.baseUrl, indexRouter);

// Serve static frontend files
const path = __dirname + '/views/';
// console.log('Serving files at ', path);
// app.use('/static', express.static(path));

indexRouter.get(config.baseUrl, function(req, res) {
  res.sendFile(path + "index.html");
});

// handle generic errors
app.use(globalHandler);

// handle 404 errors
app.use(notFoundHandler);

// set port, listen for requests
const PORT = process.env.API_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
