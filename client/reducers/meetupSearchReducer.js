export default function meetupReducer(state = {}, action) {
  switch (action.type) {
    case 'Location_Search':
      console.log('hit meetupReducer');
      return { ...state, eventResults: action.payload.data };
    default:
      return state;
  }
}
