import { MongoClient, ServerApiVersion } from "mongodb";




const URI = "mongodb+srv://sudhinmern:OZzZOjSg0KFJ2qW2@mern.aaf6b.mongodb.net/?retryWrites=true&w=majority&appName=Mern";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("employees");

export default db;
