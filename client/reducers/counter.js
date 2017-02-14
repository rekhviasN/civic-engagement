export default function Counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('increment received');
      return state + 1;
    case 'DECREMENT':
      console.log('decrement received');
      return state - 1;
    default:
      return state;
  }
}
