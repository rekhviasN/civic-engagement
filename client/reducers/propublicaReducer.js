export default function search(state = {}, action) {
  switch (action.type) {
    case 'Politician_Search_bio': {
      const { name, bio } = action.payload.data;
      if (state[name]) Object.assign(bio, state[name]);

      return { ...state, [name]: bio };
    }
    case 'Politician_Search_bills_sponsored': {
      const { name, bills } = action.payload.data;
      if (state[name]) Object.assign(bills, state[name]);

      return { ...state, [name]: bills };
    }
    case 'Politician_Search_voting_record': {
      const { name, votes } = action.payload.data;
      if (state[name]) Object.assign(votes, state[name]);

      return { ...state, [name]: votes };
    }
    case 'Top20_Search': {
      return { ...state, Top20: action.payload.data };
    }
    default:
      return state;
  }
}
// import _ from 'underscore';
// import { DoughnutTemplate, LineGraphTemplate } from '../components/graphTemplates';

// export default function search(state = {}, action) {
//   switch (action.type) {
//     case 'Politician_Search_bio': {
//       let { bio } = action.payload.data;
//       const { name } = action.payload.data;
//       const { roles } = bio;

//       const lineGraphData = Object.assign({}, LineGraphTemplate);
//       lineGraphData.labels = [];
//       lineGraphData.datasets[0].data = [];
//       lineGraphData.datasets[0].label = '% of votes missed';
        
//       roles.forEach((session) => {
//         if (session.missed_votes_pct !== undefined) {
//           const { congress, missed_votes_pct } = session;

//           lineGraphData.labels.push(congress);
//           lineGraphData.datasets[0].data.push(missed_votes_pct);
//         }
//       });

//       bio = { ...bio, lineGraphData };

//       if (state[name]) Object.assign(bio, state[name]);

//       return { ...state, [name]: bio };
//     }

//     case 'Politician_Search_voting_record': {
//       let { votes } = action.payload.data.votes;
//       const { name } = action.payload.data;

//       const doughnutGraphData = Object.assign({}, DoughnutTemplate);
//       doughnutGraphData.labels = ['Yes', 'No', 'Present'];
//       doughnutGraphData.datasets[0].data = [0, 0, 0];
    
//       _.forEach(votes, (vote) => {
//         const { data } = doughnutGraphData.datasets[0];
//         if (vote.position === 'Yes') data[0] += 1;
//         if (vote.position === 'No') data[1] += 1;
//         if (vote.position === 'Present') data[2] += 1;
//       });

//       votes = { votes, doughnutGraphData };

//       if (state[name]) Object.assign(votes, state[name]);

//       return { ...state, [name]: votes };
//     }

//     case 'Top20_Search': {
//       return { ...state, Top20: action.payload.data };
//     }
//     case 'Politician_Search_bills_sponsored': {
//       const { name, bills } = action.payload.data;
//       if (state[name]) Object.assign(bills, state[name]);

//       return { ...state, [name]: bills };
//     }
//     default:
//       return state;
//   }
// }
