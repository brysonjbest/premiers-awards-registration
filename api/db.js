const { MongoClient } = require("mongodb");

// Connection URI

const protocol = 'mongodb://'
const username = encodeURIComponent("root");
const password = encodeURIComponent("rootpassword");
const clusterUrl = "localhost";
const authMechanism = "DEFAULT";

const databaseHost = process.env.DATABASE_HOST || '';
const databasePort = process.env.DATABASE_PORT || '';
const databaseUser = process.env.DATABASE_USER || '';
const databasePassword = process.env.DATABASE_PASSWORD || '';
const databaseName = process.env.DATABASE_NAME || '';
const databaseConnectionOpts = process.env.DATABASE_CONNECTION_OPTIONS || '';

const connection = {
  remoteUrl : `mongodb://${databaseUser.trim()}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}?${databaseConnectionOpts}`,
  localUrl: `${protocol}${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`
};

const uri = databaseHost ? connection.remoteUrl : connection.localUrl;

// Create a new MongoClient
exports.getClient = () => {
  return new MongoClient(uri);
}

/* Check db connection */
exports.dbtest = async function () {
  // Connect the client to the server
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to database server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
