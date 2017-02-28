export function setLoggedIn(userData) {
  return {
    type: 'SET_LOGGED_IN',
    payload: userData
  };
}

export function setLoggedOut() {
  return {
    type: 'SET_LOGGED_OUT'
  };
}
