import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017';
const dbname = 'diplomatura';
async function conect() {
  try {
    const conexion = await MongoClient.connect(url);
    const db = conexion.db(dbname);
    return db;
  } catch (err) {
    console.log('Not connect ', err);
  }
  return null;
}
async function closeConexion(conexion) {
  try {
    await conexion.close();
  } catch (error) {
    console.log('Errro ', error);
  }
}
export const Conexion = {
  conect: conect,
  dbSelected: dbSelected,
  closeConexion: closeConexion,
};
