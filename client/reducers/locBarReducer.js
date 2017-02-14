export default function locBar(state = '', action) {
  switch (action.type) {
    case 'Location_Search':
      return { ...state, GoogleResults: action.payload.data };
    default:
      return state;
  }
}
