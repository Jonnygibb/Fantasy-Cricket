import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://mongo:27017";  // Fallback to 'mongo' if the environment variable isn't set.

export async function GET(req) {
	const queryParams = {};

	// Iterate over each search parameter and add it to the queryParams object
	req.nextUrl.searchParams.forEach((value, key) => {
		queryParams[key] = value;
	});

	// if _id is in the queryParams, convert it to a mongodb objectID instance
	if ("_id" in queryParams){
		console.log(queryParams["_id"]);
		queryParams["_id"] = new ObjectId(queryParams["_id"])
	}

	// try to query the db and return the results
	// if it errors out, catch the error and return an empty json
	try {
		const client = await MongoClient.connect(uri);
		const db = client.db("testDB");

		const players = await db.collection("players")
			.find(queryParams)
			.toArray();
		return Response.json(players);

	} catch (e) {
		console.error(e);
		return Response.json({});
	}
}