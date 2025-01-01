const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

let database;

async function connectToClient() {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('online-shop');
}

function getDb() {
    return database;
}

module.exports = {
    connectToClient: connectToClient,
    getDb: getDb
}