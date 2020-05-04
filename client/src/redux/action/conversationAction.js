import axios from 'axios';

import {
  GET_CONVERSATION,
  GET_ERROR,
  GET_CONVERSATION_LATEST,
  SET_LOADING,
  SET_RECEIVER,
  SET_CURRENT_CONVERSATION,
} from './types';

export const getConversation = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:8080/api/conversations');

    dispatch({
      type: GET_CONVERSATION,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

export const getConversationLatest = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://localhost:8080/api/conversations/latest'
    );

    dispatch({
      type: GET_CONVERSATION_LATEST,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

export const setReceiver = (receiverId) => async (dispatch) => {
  dispatch({
    type: SET_RECEIVER,
    payload: receiverId,
  });
};

export const setCurrentConversation = (conversationId) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT_CONVERSATION,
    payload: conversationId,
  });
};

export const setloading = () => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
