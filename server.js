'use strict';

const express = require('express');
const app = express();
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
const cors = require('cors');
const router = require('./router')
const { dbtest } = require('./db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// const authCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "your_jwks_uri"
//   }),
//   // This is the identifier we set when we created the API
//   audience: 'your_audience',
//   issuer: "your_auth_domain",
//   algorithms: ['RS256']
// });

// Serve static frontend files
const path = __dirname + '/views/';
console.log('Serving files at ', path);
app.use(express.static(path));

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

// Initialize API router
app.use('/app', router);

// check db connection
dbtest().catch(console.dir);

// set port, listen for requests
const PORT = process.env.API_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
