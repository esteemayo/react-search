import axios from 'axios';
import logger from './logService';

const devEnv = process.env.NODE_ENV !== 'production';
const { REACT_APP_DEV_API_URL, REACT_APP_PROD_API_URL } = process.env;

const API = axios.create({
  baseURL: `${devEnv ? REACT_APP_DEV_API_URL : REACT_APP_PROD_API_URL}`,
  headers: {
    Accept: 'application/json',
  },
});

API.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.statusCode >= 400 &&
    error.response &&
    error.response.statusCode < 500;

  if (!expectedError) {
    logger.log(error);
    console.log('An unexpected error occurred');
  }
});

const http = {
  get: API.get,
  post: API.post,
  patch: API.patch,
  delete: API.delete,
};

export default http;
