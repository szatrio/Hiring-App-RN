import axios from 'axios';

const api = 'localhost:8000/user/login'

export const fetchUser = (data) => ({
  type: 'LOGIN_FULFILLED',
  payload: axios.post(api, data),
});