import nextFrame from 'next-frame';

async function calculateHcf({ input1, input2 }) {
  await nextFrame();
  let remainder = input1;
  let larger = input1 > input2 ? input1 : input2;
  let smaller = input2 > input1 ? input1 : input2;
  while (remainder > 0) {
    remainder = larger % smaller;
    larger = smaller;
    smaller = remainder;
  }
  return larger;
}

export default calculateHcf;
