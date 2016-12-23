const amount = (state = '0', action) => {
  switch (action.type) {
  case 'NUMBER/SET':
    return action.number;
  default:
    return state;
  }
};

export default amount;
