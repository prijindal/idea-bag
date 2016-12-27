const value = (state = 0, action) => {
  switch (action.type) {
  case 'VALUE/SET':
    return parseInt(action.value, 0);
  default:
    return state;
  }
};

export default value;
