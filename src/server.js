const app = require('./app');

const PORT = process.env.PORT || 8080;
const connectDB = require('./config/db');
const socketio = require('./config/socketio');

connectDB();

const server = socketio(app);

server.listen(PORT, () => {
  console.log('Server on with port: ', PORT);
});
