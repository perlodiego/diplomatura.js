// importa metodos 
import express, { json } from 'express';
import bodyParser from 'body-parser';
import alumnosRoutes from './routes/alumnosRouter';
import profesoresRoutes from './routes/profesoresRouter';
import { db } from './models/db';


// definicion de puerto
const PORT = 8080;
const app = express();

// conecta base de datos. el objeto db viene de los models
db.connectDB((err,database )=>{
   if (err) console.log(err);
});

app.use(bodyParser.json());

// accede a los controladores creados
app.use('/alumnos', alumnosRoutes);
app.use('/profesores', profesoresRoutes);

// mensaje de bienvenida
app.get('/', function (req,res) {
  res.json({ mensaje: 'Bienvenido al servidor de la Universidad' });
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);
