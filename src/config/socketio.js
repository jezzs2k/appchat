const socketio = require('socket.io');
const http = require('http');

module.exports = (app) => {
  const server = http.createServer(app);
  const io = socketio.listen(server);

  const chat = io.of('/chat').on('connect', (socket) => {
    socket.on('join', (conversationId) => {
      socket.leaveAll();
      socket.join(conversationId);
      socket.emit('chat_join', conversationId);
      console.log(`user join ${conversationId}`);
    });

    socket.on('sendMess', (messenger) => {
      chat.emit('messenger', messenger);
    });
  });

  // io.on('connection', (socket) => {
  //   console.log('connect...', socket.id);

  //   socket.on('sendMess', (messenger) => {
  //     socket.to(messenger.conversationId).emit('messenger', messenger);
  //   });

  //   socket.on('disconnect', () => {
  //     console.log('disconnect');
  //   });
  // });

  return server;
};
