import { getGroups } from '../../helpers/values';

const groups = getGroups();

const groupReducer = (state = groups[0], action) => {
  const { group } = action;
  switch (action.type) {
  case 'GROUP/SET':
    if (groups.indexOf(group) >= 0) {
      return group;
    }
    return groups[0];
  default:
    return state;
  }
};

export default groupReducer;
