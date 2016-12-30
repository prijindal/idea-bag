import uuid from 'node-uuid';

const journal = (state = {}, action) => {
  switch (action.type) {
  case 'JOURNAL/EDIT':
    if (state.id === action.id) {
      return Object.assign({}, state, {
        content: action.content,
      });
    }
    return state;
  default:
    return state;
  }
};

// Journal Format = { date: , content: , id:  }
const journals = (state = [], action) => {
  switch (action.type) {
  case 'JOURNAL/ADD':
    return [
      ...state,
      {
        id: uuid.v1(),
        content: action.content,
        date: Date.now(),
      },
    ];
  case 'JOURNAL/EDIT':
    return state.map(entry => journal(entry, action));
  case 'JOURNAL/DELETE':
    return state.filter(entry => entry.id !== action.id);
  default:
    return state;
  }
};

export default journals;
