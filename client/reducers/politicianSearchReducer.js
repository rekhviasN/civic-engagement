export default function search(state = {}, action) {
  switch (action.type) {
    case 'Politician_Search':
      console.log('Politican_Search dispatched and received');
      return { ...state, News: action.payload.data };
    default:
      return state;
  }
}
