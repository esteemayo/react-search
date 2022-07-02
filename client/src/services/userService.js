import http from './httpService';

const apiEndpoint = '/users';

export const getUsers = (searchQuery) =>
  http.get(`${apiEndpoint}?q=${searchQuery}`);
