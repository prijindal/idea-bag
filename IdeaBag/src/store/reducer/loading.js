const email = (state = true, action) => {
  switch (action.type) {
  case 'LOADING/ON':
    return true;
  case 'LOADING/OFF':
    return false;
  default:
    return state;
  }
};

export default email;
