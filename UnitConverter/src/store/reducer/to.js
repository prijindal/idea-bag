const toReducer = (state = 'miles', action) => {
  switch (action.type) {
  case 'TO/SET':
    return action.to;
  default:
    return state;
  }
};

export default toReducer;
