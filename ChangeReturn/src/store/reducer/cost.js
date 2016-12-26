const amount = (state = '0', action) => {
  switch (action.type) {
  case 'COST/SET':
    return action.cost;
  default:
    return state;
  }
};

export default amount;
