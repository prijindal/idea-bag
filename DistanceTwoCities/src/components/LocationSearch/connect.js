import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch, {dispatchKey}) => ({
  setStart: (location) =>
    dispatch({
      type: `LOCATION/SET`,
      location,
      position: dispatchKey
    })
})

const mapStateToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
