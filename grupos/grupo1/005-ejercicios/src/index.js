import express, { json } from 'express';
import bodyParser from 'body-parser';
import alumnosRoutes from './routes/alumnosRouter';
import { db } from './helpers/db';

const PORT = 8080;
const app = express();

db.connectDB((err, database) => {
  if (err) console.log(err);
});

app.use(bodyParser.json());

app.use('/alumnos', alumnosRoutes);

app.get('/', function (req, res) {
  res.json({ mensaje: 'Bienvenido al servidor de la Universidad' });
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);
