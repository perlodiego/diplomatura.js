const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';
const database = 'diplomatura';

const ejecutarCRUD = async function (
  url = 'mongodb://localhost:27017/',
  optional_args = {}
) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    if ((optional_args.type = 'get')) {
      await getInfo(client, 'diplomatura', 'universidades');
    } else {
      return 'NoHola';
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

async function getInfo(client, database, collection) {
  try {
    const result = await client
      .db(database)
      .collection(collection)
      .find({})
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const helper = {
  ejecutarCRUD,
};
