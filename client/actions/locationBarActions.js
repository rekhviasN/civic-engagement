import Axios from 'axios';

const ROOT_URL = 'https://civicsportal.herokuapp.com/api';

export default function (location) {
  const request = Axios.get(`${ROOT_URL}/representatives/${location}`);
  return {
    type: 'Location_Search',
    payload: request
  };
}
