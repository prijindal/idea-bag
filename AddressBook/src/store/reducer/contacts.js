const contacts = (state = [], action) => {
  switch (action.type) {
  case 'CONTACTS/SET':
    return action.contacts;
  default:
    return state;
  }
};

export default contacts;
