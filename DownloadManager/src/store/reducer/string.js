const string = (state = '', action) => {
  switch (action.type) {
  case 'TEXT/SET':
    return action.string;
  default:
    return state;
  }
};

export default string;
