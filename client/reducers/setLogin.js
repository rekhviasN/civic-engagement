export default function setLogin(state = { loggedIn: false, userData: null }, action) {
  switch (action.type) {
    case 'SET_LOGGED_IN': {
      console.log('action.payload.data should be user data', action.payload);
      return { ...state, loggedIn: true, userData: action.payload };
    }
    case 'SET_LOGGED_OUT': {
      return { ...state, loggedIn: false, userData: null };
    }
    default:
      return state;
  }
}
