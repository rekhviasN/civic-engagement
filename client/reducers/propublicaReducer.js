export default function search(state = {}, action) {
  switch (action.type) {
    case 'Politician_Search_bio': {
      const { name, bio } = action.payload.data;
      return { ...state, [name]: bio[0] };
    }
    default:
      return state;
  }
}