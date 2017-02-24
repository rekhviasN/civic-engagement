import _ from 'underscore';

export default function locBar(state = {}, action) {
  switch (action.type) {
    case 'Location_Search': {
      const { offices, officials } = action.payload.data;
      
      // const repIndices = offices.filter(office =>
      //   office.name.slice(0, 13) === 'United States');
      // const repss = repIndices.reduce((acc, index) =>
      //   acc.concat(index.officialIndices), []);
      // const repsActual = repss.map(i => officials[i]);

      const reps = offices
        .filter(office => office.name.slice(0, 13) === 'United States')
        .reduce((acc, index) => acc.concat(index.officialIndices), [])
        .map(i => officials[i]);

      return {
        ...state,
        GoogleResults: action.payload.data,
        // repIndices,
        // repsActual,
        // repsFORREAL,
        reps
      };
    }
    default:
      return state;
  }
}
//
// export default function locBar(state = '', action) {
//   switch (action.type) {
//     case 'Location_Search':
//       console.log('inside the locBarReducer');
//       console.log('action: ', action);
//       console.log(action.payload.data);
//       return { ...state, GoogleResults: action.payload.data };
//     default:
//       return state;
//   }
// }
