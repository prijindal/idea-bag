import RNFS from 'react-native-fs';

const directory = (state = RNFS.ExternalStorageDirectoryPath, action) => {
  switch (action.type) {
  case 'DIRECTORY/SET':
    return action.directory;
  case 'DIRECTORY/BACK':
    return state.split('/').slice(0, -1).join('/');
  default:
    return state;
  }
};

export default directory;
