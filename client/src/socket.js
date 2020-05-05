import io from 'socket.io-client';

const chat = io.connect('http://localhost:8080/chat');

const configureSocket = (dispatch) => {
  chat.on('connect', () => {
    console.log('connected chat ...');
  });

  //make something
  return chat;
};

export default configureSocket;
