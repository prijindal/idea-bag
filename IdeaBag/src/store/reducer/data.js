const data = (state = [], action) => {
  switch (action.type) {
  case 'DATA/INIT':
    return action.data;
  default:
    return state;
  }
};

export default data;
