const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';  // Change this to your database name

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

        // Select the collection
        const collection = db.collection('Authors');
    // Define four author objects
   /* const authors = [
        { name: 'Charlse victor', nationality: 'Nigerian', books: ['Things Fall Apart', 'No Longer at Ease'], born: 1930 },
        { name: 'J.K. Rowling', nationality: 'British', books: ['Harry Potter and the Sorcerer\'s Stone', 'Fantastic Beasts'], born: 1965 },
        { name: 'Gabriel García Márquez', nationality: 'Colombian', books: ['One Hundred Years of Solitude', 'Love in the Time of Cholera'], born: 1927 },
        { name: 'Toni Morrison', nationality: 'American', books: ['Beloved', 'The Bluest Eye'], born: 1931 }
    ];
*/
    // Insert documents into the 'authors' collection
    
        const insertResult = await collection.insertMany([
            { name: 'Charlse victor', nationality: 'Nigerian', books: ['Things Fall Apart', 'No Longer at Ease'], born: 1930 },
            { name: 'J.K. Rowling', nationality: 'British', books: ['Harry Potter and the Sorcerer\'s Stone', 'Fantastic Beasts'], born: 1965 },
            { name: 'Gabriel García Márquez', nationality: 'Colombian', books: ['One Hundred Years of Solitude', 'Love in the Time of Cholera'], born: 1927 },
            { name: 'Toni Morrison', nationality: 'American', books: ['Beloved', 'The Bluest Eye'], born: 1931 },
        ]
        );
        
        //function(err, result));
        console.log("Inserted documents:", insertResult);
        
    } finally {
        // Close the connection
        await client.close();
    }
}

main().catch(console.error);