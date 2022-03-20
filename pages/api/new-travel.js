/* API runs only on server, never on the client */
// /api/new-travel
// POST /api/new-travel

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    /* const { title, image, country, description } = data; */

    const client = await MongoClient.connect(
      "mongodb+srv://<username>:<password>@clusterX.XXXXX.mongodb.net/travels?retryWrites=true&w=majority"
    );
    const db = client.db();

    const travelsCollection = db.collection("travels");

    const result = await travelsCollection.insertOne(data);

    console.log(result);

    client.close();

    console.log(res);

    res.status(201).json({ message: "Travel inserted!" }); //201 indicates something was inserted successfully
  }
};

export default handler;
