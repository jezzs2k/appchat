import {
  SEND_MESSENGER,
  GET_MESSENGER,
  SEND_ERROR,
  ADD_MESSENGER,
  SET_LOADING,
} from '../action/types';

const initalState = {
  messengers: [],
  error: null,
  loading: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SEND_MESSENGER:
      return {
        ...state,
      };
    case GET_MESSENGER:
      return {
        ...state,
        messengers: action.payload.data.data.messengers,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEND_ERROR:
      return {
        ...state,
        error: action.payload,
        messengers: [],
      };
    case ADD_MESSENGER:
      if (action.payload.conversation === state.messengers[0].conversation) {
        return {
          ...state,
          error: null,
          messengers: [...state.messengers, action.payload],
        };
      }
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
