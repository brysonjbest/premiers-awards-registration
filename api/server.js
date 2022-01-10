'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router')
const { dbtest } = require('./db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "your_jwks_uri"
  }),
  // This is the identifier we set when we created the API
  audience: 'your_audience',
  issuer: "your_auth_domain",
  algorithms: ['RS256']
});

// Initialize router
app.use('/', router);

// check db connection
dbtest().catch(console.dir);

app.listen(8000);
console.log('Listening on localhost:8000');
