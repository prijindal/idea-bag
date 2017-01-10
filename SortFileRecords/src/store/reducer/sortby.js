export const SORTES = [
  'NAME/ASC',
  'NAME/DESC',
];

const sortby = (state = SORTES[0], action) => {
  switch (action.type) {
  case 'SORTYBY/SET':
    return action.sortby;
  default:
    return state;
  }
};

export default sortby;
