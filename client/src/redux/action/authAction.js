import {
  LOGIN,
  LOGOUT,
  REGISTER,
  AUTH_ERROR,
  SET_LOADING,
  LOAD_USER,
} from './types.js';
import axios from 'axios';

import setToken from '../../utils/setToken';

export const login = (data) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      'http://localhost:8080/api/auth/login',
      data,
      config
    );

    setToken(res.data.data.token);

    dispatch({
      type: LOGIN,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      'http://localhost:8080/api/auth/register',
      data,
      config
    );
    setToken(res.data.data.token);

    dispatch({
      type: REGISTER,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.respone,
    });
  }
};

//load user
export const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      setToken(localStorage.token);
    }

    const res = await axios.get('http://localhost:8080/api/users/user');

    dispatch({
      type: LOAD_USER,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.respone,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const setLoading = () => (dispatch) => {
  dispatch({ type: SET_LOADING });
};
