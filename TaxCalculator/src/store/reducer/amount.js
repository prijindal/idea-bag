const amount = (state = 0, action) => {
  switch (action.type) {
  case 'AMOUNT/SET':
    return parseFloat(action.amount);
  default:
    return state;
  }
};

export default amount;
