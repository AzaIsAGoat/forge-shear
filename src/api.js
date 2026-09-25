import axios from 'axios';

const api = axios.create({
  baseURL: 'https://forgeandshearapi-apg3gcazgvb4f8fc.uaenorth-01.azurewebsites.net', 
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;