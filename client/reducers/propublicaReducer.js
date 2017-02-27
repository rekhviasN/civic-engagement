export default function search(state = { votingrecord: {}, bills: {} }, action) {
  switch (action.type) {
    case 'Politician_Search_bio': {
      const { name, bio } = action.payload.data;

      if (state[name]) {
      
      }
      return { ...state, [name]: bio[0] };
    }
    
    // if (state[name]) {
    //     data.api = data.api.concat(state[name].api);
    //     data.articles = state[name].articles.concat(data.articles);
    //   }
    case 'Politician_Search_bills_sponsored': {
      let { name, bills } = action.payload.data;

      bills = Object.assign(bills[0], state[name]);

      // return { ...state, [name]: bills[0] };
      return { ...state, [name]: bills };
    }

    case 'Politician_Search_voting_record': {
      const { name, votes } = action.payload.data;

      // return { ...state, [name]: votes[0] };
      return state;
    }
    default:
      return state;
  }
}
