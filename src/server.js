const app = require('./app');

const PORT = process.env.PORT || 8080;
const connectDB = require('./config/db');
const server = require('http').Server(app);
const io = require('socket.io')(server);

connectDB();

io.on('connection', (socket) => {
  //listen updates
  console.log('Connect...');

  socket.on('disconnect', () => {
    console.log('disconnect..');
  });
});

server.listen(PORT, () => {
  console.log('Server on with port: ', PORT);
});
