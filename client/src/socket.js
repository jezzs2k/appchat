import io from 'socket.io-client';

const socket = io('http://localhost:8080');

const configureSocket = (dispatch) => {
  socket.on('connect', () => {
    console.log('connected');
  });

  //make something
  return socket;
};

export default configureSocket;
