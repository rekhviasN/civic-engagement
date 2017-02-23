import Axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

export default function bingNews(name) {
  console.log('in PoliticianSearchActions name:', name);
  const bingNews = Axios.get(`${ROOT_URL}/bingNews/${name}`);
  return {
    type: 'Politician_Search',
    payload: bingNews
  };
}

export function nytimes(name) {
  console.log('in PoliticianSearchActions name:', name);
  const nytimes = Axios.get(`${ROOT_URL}/nytimes/${name}`);
  return {
    type: 'Politician_Search_nytimes',
    payload: nytimes
  };
}

export function bio(name) {
  const bio = Axios.get(`${ROOT_URL}/repBios/${name}`);
  return {
    type: 'Politician_Search_bio',
    payload: bio
  };
}