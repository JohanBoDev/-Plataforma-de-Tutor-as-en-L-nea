import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/usuarios/login`, { username, password });
  return response.data;
};
