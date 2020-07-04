import express from 'express';
const app = express();
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';
import usersRoutes from './controllers/users';
import os from 'os';
import moment from 'moment';
moment.locale('es-AR');
let serverStartUpTime;

const PORT = 8080;

app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);
app.use('/users', usersRoutes);

// Implementar el endpoint de stats aca. GET "/"
app.get('/', function (req, res) {
  const d=moment();
  const result={
    serverCurrentTime: d.format('MMMM Do YYYY, h:mm:ss a'),
    serverStartUpTime: serverStartUpTime.format('MMMM Do YYYY, h:mm:ss a'),
    serverUpTime: serverStartUpTime.startOf('minutes').fromNow(),
    status: {
      freemem : os.freemem(),
      totalmem: os.totalmem(),
      uptime  : os.uptime(),
      hostname: os.hostname(),
      platform: os.platform(),
    }
  }
  res.json(result)
});


app.listen(PORT,()=>{
  console.log(`Express started on port ${PORT}`);
  serverStartUpTime=moment();
});
