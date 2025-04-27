import { MongoClient, ObjectId } from "mongodb";
import dbPromise from "../../lib/db";

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
		queryParams["_id"] = new ObjectId(queryParams["_id"]);
	}

	if ("Points" in queryParams){
		console.log(queryParams["Points"]);
		queryParams["Points"] = parseFloat(queryParams["Points"]);
	}

	if ("Free Agent" in queryParams){
		console.log(queryParams["Free Agent"]);
		queryParams["Free Agent"] = parseInt(queryParams["Free Agent"]);
	}

	const db = await dbPromise;
	const players = await db.collection("players")
		.find(queryParams)
		.toArray();
	return Response.json(players);
}

export async function PUT(req) {
	const body = await req.json();

	const db = await dbPromise;

	// if the user specifies an id, update the record
	// otherwise add a new record
	if ("_id" in body){
		// reformat the id as a objectID and then pop it from the json object
		const id = {"_id" : new ObjectId(body["_id"])};
		delete body["_id"];

		// query the DB for the player
		const players = await db.collection("players")
			.find(id)
			.toArray();

		// if the player is found update it, otherwise return not found
		if (players.length != 0){
			db.collection("players").updateOne(id, {$set: body}, function(err, res){
				if (err){
					return Response.json({"error": err})
				}		
			})

			return Response.json({"Status": "Updated"});
		}

		return Response.json({"Status": "ID not found"})

	} else {
		db.collection("players").insertOne(body, function(err, res){
			if (err){
				return Response.json({"error": err})
			}	
		})

		return Response.json({"Status": "Inserted"})
	}
}

export async function DELETE(req) {
	const body = await req.json();

	if (!"_id" in body){
		return ({"Status": "ID needs to be supplied to ensure correct record is removed"});
	}

	const db = await dbPromise;

	body["_id"] = new ObjectId(body["_id"]);

	db.collection("players").deleteOne(body, function(err, obj){
		if (err) return Response.json({"Status": err});
	});

	return Response.json({"Status": "Done"});
}