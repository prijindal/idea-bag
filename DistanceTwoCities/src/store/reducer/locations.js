const initState = {
  start: {},
  end: {}
}

const locations = (state = initState, action) => {
  let type = action.type
  switch (type) {
    case 'LOCATION/SET':
      let newObject = {}
      newObject[action.position] = action.location
      return Object.assign({}, state, newObject)
    case 'CLEAR':
      return initState
    default:
      return state
  }
}

export default locations
