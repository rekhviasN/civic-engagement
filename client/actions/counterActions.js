export function incCounter() {
  console.log('increment counter!');
  return {
    type: 'INCREMENT',
  };
}

export function decCounter() {
  console.log('decrement counter!');
  return {
    type: 'DECREMENT',
  };
}

// export default incCounter;
