// lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://mongo:27017";
const dbName = "testDB";

// options for the mongoDb connection like pool size
const options = {
	minPoolSize: 5,
	maxPoolSize: 10,
	maxIdleTimeMS: 2500,
};

let db: Db;
let client: MongoClient;
let dbPromise: Promise<Db>;

declare global {
    var _mongoDbPromise: Promise<Db>;
}

if (process.env.NEXT_ENV === "development") {
    if (!global._mongoDbPromise) {
        client = new MongoClient(uri, options);
        global._mongoDbPromise = client.connect().then((client) => client.db(dbName));
    }
     dbPromise = global._mongoDbPromise;
} else {
    client = new MongoClient(uri, options);
    dbPromise = client.connect().then((client) => client.db(dbName));
}

export default dbPromise;
