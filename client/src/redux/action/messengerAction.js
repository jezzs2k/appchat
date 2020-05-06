import axios from 'axios';
import { socket } from '../../App';

import {
  GET_MESSENGER,
  SEND_MESSENGER,
  SEND_ERROR,
  ADD_MESSENGER,
  SET_LOADING,
} from './types';

export const sendMess = (messenger, receiverId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = {
      receiverId,
      text: messenger,
    };

    const res = await axios.post(
      'http://localhost:8080/api/messengers',
      data,
      config
    );
    socket.emit('sendMess', res.data.data.newMessenger);

    dispatch({
      type: SEND_MESSENGER,
      payload: messenger,
    });
  } catch (err) {
    dispatch({
      type: SEND_ERROR,
      payload: err,
    });
  }
};

export const getMess = (conversationId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/messengers/${conversationId}`
    );

    dispatch({
      type: GET_MESSENGER,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: SEND_ERROR,
      payload: err,
    });
  }
};

export const addMess = (messenger) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_MESSENGER,
      payload: messenger,
    });
  } catch (err) {
    dispatch({
      type: SEND_ERROR,
      payload: err,
    });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
