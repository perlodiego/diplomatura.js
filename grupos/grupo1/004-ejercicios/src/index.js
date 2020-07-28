import express from 'express';
const app = express();
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';

let os = require('os');
let moment = require('moment');
moment.locale('es-AR');

const PORT = 8080;

app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);

app.listen(PORT);
let start = moment();
console.log(`Express started on port ${PORT}`);

app.get('/', function (req, res) {
  const result = {
    serverCurrentTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
    serverStartUpTime: start.format('MMMM Do YYYY, h:mm:ss a'), // En español
    serverUpTime: start.startOf('minutes').fromNow(), // usando moment relative time
    otros: 'hola',

    status: {
      freemem: os.freemem(),
      totalmem: os.totalmem(),
      uptime: os.uptime(),
      hostname: os.hostname(),
      platform: os.platform(),
    },
  };
  res.json({ result });
});
