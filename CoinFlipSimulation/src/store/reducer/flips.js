const amount = (state = [], action) => {
  switch (action.type) {
  case 'FLIP/ADDNEW':
    return [
      ...state,
      Math.round(Math.random()),
    ];
  case 'FLIP/CLEAR':
    return [];
  default:
    return state;
  }
};

export default amount;
