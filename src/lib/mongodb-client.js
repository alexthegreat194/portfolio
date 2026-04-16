import dotenv from 'dotenv';

dotenv.config();

import { MongoClient } from 'mongodb';

const uri = process.env['MONGODB_URI'];

let client;
/** @type {Promise<import('mongodb').MongoClient>} */
let clientPromise;

if (!uri) {
	throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env['NODE_ENV'] === 'development') {
	const globalWithMongo = /** @type {typeof globalThis & { _mongoClientPromise?: Promise<import('mongodb').MongoClient> }} */ (
		globalThis
	);
	if (!globalWithMongo._mongoClientPromise) {
		client = new MongoClient(uri);
		globalWithMongo._mongoClientPromise = client.connect();
	}
	clientPromise = globalWithMongo._mongoClientPromise;
} else {
	client = new MongoClient(uri);
	clientPromise = client.connect();
}

export default clientPromise;
