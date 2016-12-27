const input1 = (state = 0, action) => {
  switch (action.type) {
  case 'INPUT1/SET':
    return parseInt(action.value, 0);
  default:
    return state;
  }
};

export default input1;
