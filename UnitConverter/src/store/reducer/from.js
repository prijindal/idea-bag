const fromReducer = (state = 'kms', action) => {
  switch (action.type) {
  case 'FROM/SET':
    return action.from;
  default:
    return state;
  }
};

export default fromReducer;
