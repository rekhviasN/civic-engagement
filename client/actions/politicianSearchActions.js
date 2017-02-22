import Axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

export default function (name) {
  console.log('in PoliticianSearchActions name:', name);
  // const nytimes = Axios.get(`${ROOT_URL}/nytimes/${name}`);
  const bingNews = Axios.get(`${ROOT_URL}/bingNews/${name}`);
  return {
    type: 'Politician_Search',
    payload: bingNews
    // payload: nytimes
  };
}
