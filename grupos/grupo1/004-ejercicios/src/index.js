import express from 'express';
const app = express();
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';
import fetch from 'node-fetch'
// import * as moment from 'moment';

const PORT = 8080;

app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);

// import os
let os = require('os');
const moment = require('moment');
moment.locale('es-AR');
// Implementar el endpoint de stats aca. GET "/"
app.get('/', function (req, res) {

  const result = { 
  
    // serverCurrentTime: new Date()//'julio 3º 2020, 12:07:23 pm', // En español
    // serverStartUpTime: 'julio 3º 2020, 12:06:54 pm', // En español
    // serverUpTime: 'hace 10 minutos', // usando moment relative time
    
    serverCurrentTime: moment(new Date()).format("YYY-MM-DD HH:mm:ss"),
    serverStartUpTime: serverUpTime,
    serverUpTime: serverUpTime.startOf('minutes').fromNow(),
  
    status: {
      freemem: os.freemem(),
      totalmem: os.totalmem(),
      uptime: os.uptime(),
      hostname: os.hostname(),
      platform: os.platform(),
      nombre: "German",
    }     
  };
  res.json(result);

  // res.json({
    
  //   routes: fetch(postsRoutes),
  //   status: {
  //     freemem: os.freemem(),
  //     totalmem: os.totalmem(),
  //     uptime: os.uptime(),
  //     hostname: os.hostname(),
  //     platform: os.platform(),
  //   } 
  

  
  // });
});



app.listen(PORT);
let serverUpTime = moment();
console.log(`Express started on port ${PORT}`);
