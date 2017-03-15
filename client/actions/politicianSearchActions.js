import Axios from 'axios';

const ROOT_URL = 'https://civicsportal.herokuapp.com/api';

export function bingNews(name) {
  console.log('in PoliticianSearchActions bing:', name);
  const request = Axios.get(`${ROOT_URL}/bingNews/${name}`);
  return {
    type: 'Politician_Search_bing',
    payload: request
  };
}

export function nytimes(name) {
  console.log('in PoliticianSearchActions nytimes:', name);
  const request = Axios.get(`${ROOT_URL}/nytimes/${name}`);
  return {
    type: 'Politician_Search_nytimes',
    payload: request
  };
}

export function bio(name) {
  const request = Axios.get(`${ROOT_URL}/propublica/member/${name}`);
  return {
    type: 'Politician_Search_bio',
    payload: request
  };
}

export function bills(name) {
  const request = Axios.get(`${ROOT_URL}/propublica/member/bills/${name}`);
  return {
    type: 'Politician_Search_bills_sponsored',
    payload: request
  };
}

export function votes(name) {
  const request = Axios.get(`${ROOT_URL}/propublica/member/votes/${name}`);
  return {
    type: 'Politician_Search_voting_record',
    payload: request
  };
}