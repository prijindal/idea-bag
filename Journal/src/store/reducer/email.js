const email = (state = '', action) => {
  switch (action.type) {
  case 'EMAIL/SET':
    return action.email;
  case 'EMAIL/CLEAR':
    return '';
  default:
    return state;
  }
};

export default email;
