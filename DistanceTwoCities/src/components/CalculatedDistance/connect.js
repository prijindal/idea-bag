import {connect} from 'react-redux'

const mapStateToProps = ({locations}) => ({locations})

export default connect(
  mapStateToProps
)
