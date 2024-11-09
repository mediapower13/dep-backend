// Import the MongoDB client
const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';  // Replace with your MongoDB connection string if needed
const dbName = 'myDatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Async function to connect and perform operations
async function main() {
    try {
        // Connect to MongoDB server
        await client.connect();
        console.log("Connected successfully to MongoDB server");

        // Select the database
        const db = client.db(dbName);

        // Select the collection (like a table in SQL)
        const collection = db.collection('users');

        // Insert a document (CREATE)
        const insertResult = await collection.insertOne({ name: "John", email: "john@example.com", password: "12345" });
        console.log("Inserted document:", insertResult.insertedId);

       /* // Find a document (READ)
        const findResult = await collection.findOne({ name: "John" });
        console.log("Found document:", findResult);

        // Update a document (UPDATE)
        const updateResult = await collection.updateOne({ name: "John" }, { $set: { email: "john_updated@example.com" } });
        console.log("Updated document count:", updateResult.modifiedCount);

        // Delete a document (DELETE)
        const deleteResult = await collection.deleteOne({ name: "John" });
        console.log("Deleted document count:", deleteResult.deletedCount);
        */
    } finally {
        // Close the connection
        await client.close();
    }
}

// Run the main function
main().catch(console.error);