// not yet functioning
export default function locBar(state = 0, action) {
  switch (action.type) {
    case 'Location_Search':
      return { ...state, GoogleResults: action.payload.data };
    default:
      return state;
  }
}
