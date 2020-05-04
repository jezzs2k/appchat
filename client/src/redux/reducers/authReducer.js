import {
  LOGIN,
  LOGOUT,
  REGISTER,
  SET_LOADING,
  AUTH_ERROR,
  LOAD_USER,
} from '../action/types';

const initalState = {
  token: localStorage.getItem('token'),
  loading: null,
  error: null,
  isAuthenticated: null,
  user: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        token: localStorage.token,
        loading: false,
        error: null,
        isAuthenticated: true,
        user: action.payload.data.data,
      };
    case LOGIN:
      localStorage.setItem('token', action.payload.data.data.token);
      return {
        ...state,
        token: action.payload.data.data.token,
        loading: false,
        error: null,
        isAuthenticated: true,
      };
    case REGISTER:
      localStorage.setItem('token', action.payload.data.data.token);
      return {
        ...state,
        token: action.payload.data.data.token,
        error: null,
        loading: false,
        isAuthenticated: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        error: null,
        loading: false,
        isAuthenticated: false,
      };
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        error: action.payload,
        loading: false,
        isAuthenticated: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
