const {getClient} = require('../db')

const client = getClient();

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

/* homepage */
const get = function (req, res, next) {
  res.send('Registration Homepage')
}
