// import nextFrame from 'next-frame';
import values from './values';

function calculateConverted({ group, from, to, value }) {
  // await nextFrame();
  let groupSelection = values[group];
  return (value * groupSelection[to]) / groupSelection[from];
}

export default calculateConverted;
