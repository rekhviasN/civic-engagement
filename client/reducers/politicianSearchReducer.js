export default function search(state = {}, action) {
  switch (action.type) {
    case 'Politician_Search':
      const { query } = action.payload.data;
      const { data } = action.payload;
      console.log('Politican_Search dispatched and received');
      return { ...state, [query]: data };
    default:
      return state;
  }
}
