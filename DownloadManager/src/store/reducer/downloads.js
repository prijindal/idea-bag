import uuid from 'node-uuid';

const download = (state = {}, action) => {
  switch (action.type) {
  case 'DOWNLOAD/COMPLETE':
    if (state.id === action.id) {
      return Object.assign({}, state, {
        progress: 100,
        status: 'COMPLETED',
        path: action.path,
      });
    }
    return state;
  case 'DOWNLOAD/PROGRESS':
    if (state.id === action.id) {
      return Object.assign({}, state, {
        progress: action.progress,
        status: 'DOWNLOADING',
      });
    }
    return state;
  case 'DOWNLOAD/PAUSE':
    if (state.id === action.id) {
      return Object.assign({}, state, {
        status: 'PAUSED',
      });
    }
    return state;
  case 'DOWNLOAD/ABORT':
    if (state.id === action.id) {
      return Object.assign({}, state, {
        status: 'ABORTED',
      });
    }
    return state;
  default:
    return state;
  }
};

const downloads = (state = [], action) => {
  switch (action.type) {
  case 'DOWNLOADS/NEW':
    return [
      ...state,
      {
        id: uuid.v1(),
        url: action.url,
        progress: 0,
        status: 'DOWNLOADING',
      },
    ];
  case 'DOWNLOADS/CLEAR':
    return [];
  case 'DOWNLOAD/PROGRESS':
    return state.map(item => download(item, action));
  case 'DOWNLOAD/COMPLETE':
    return state.map(item => download(item, action));
  case 'DOWNLOAD/PAUSE':
    return state.map(item => download(item, action));
  case 'DOWNLOAD/ABORT':
    return state.map(item => download(item, action));
  default:
    return state;
  }
};

export default downloads;
