const input2 = (state = 0, action) => {
  switch (action.type) {
  case 'INPUT2/SET':
    return parseInt(action.value, 0);
  default:
    return state;
  }
};

export default input2;
