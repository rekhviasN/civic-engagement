import Axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

export default function(location) {
<<<<<<< HEAD
  const request = Axios.get(`${ROOT_URL}/representatives/${location}`).then(response => console.log(response));
=======
  const request = Axios.get(`${ROOT_URL}/representatives/${location}`);
>>>>>>> locBarFix
  return {
    type: 'Location_Search',
    payload: request
  };
}
