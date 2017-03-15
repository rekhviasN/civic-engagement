import Axios from 'axios';

const ROOT_URL = 'https://civicsportal.herokuapp.com/api';

export default function (location) {
  const request = Axios.get(`${ROOT_URL}/meetup/${location}`);
  return {
    type: 'Meetup_Search',
    payload: request
  };
}
