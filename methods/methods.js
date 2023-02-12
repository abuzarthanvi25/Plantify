import axios from 'axios';
import CONSTANT from '../Constants.config';

export const getLoggedInHeader = Accesstoken => {
  return {
    authorization: 'Bearer ' + Accesstoken,
  };
};

export const getRequest = endpoint => {
  axios
    .get(endpoint)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      return err.json();
    });
};

export const postRequest = async (endpoint, body) => {
  const res = await fetch(`${CONSTANT.PROJECT_URL}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return await res.json();
};

export const putRequest = async (endpoint, body) => {
  const res = await fetch(`${CONSTANT.PROJECT_URL}${endpoint}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
  return await res.json();
};

export const deleteRequest = async (endpoint, body) => {
  const res = await fetch(`${CONSTANT.PROJECT_URL}${endpoint}`, {
    method: 'DELETE',
    body: JSON.stringify(body),
  });
  return await res.json();
};
