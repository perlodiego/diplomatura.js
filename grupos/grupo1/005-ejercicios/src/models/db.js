import mongo from 'mongodb';

const dbClient = mongo.MongoClient;
const dbname = 'universidad';
const url = `mongodb://localhost:27017/${dbname}`;
let   _db;

/**
  * Connects to the database specified in this file and assing the result to _db
  */
async function connectDB(){
    dbClient.connect(url, { useUnifiedTopology: true }, (err, database) => {
        if (err) {
            console.log(err);
            throw err;
        }
        _db = database.db(dbname);
        if (!_db) {
            console.log(err);
            throw err;
        }
    });
};

/**
  * Returns the database stored in _db
  */
const getDb=()=>_db;

/**
  * Returns a collection from the database specified
  * @param {String} name The collection you want to use
  * @param {Object} database The database that has the collection
  */
const getCollection=(name)=>(database)=>database.collection(name);

const closeDb=()=>_db.close();

export const db = {
    connectDB,
    getDb,
    getCollection,
    closeDb
}