export default function setDefaultLocation(state = { location: "1216 Broadway new york new york" }, action) {
  switch (action.type) {
    case 'SET_DEFAULT_LOCATION' : {
      console.log('action.payload should be the new location', action.payload);
      return { ...state, location: action.payload };
    }
    default:
      return state;
  }
}