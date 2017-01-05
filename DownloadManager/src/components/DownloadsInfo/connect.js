import { connect } from 'react-redux';

const mapStateToProps = ({ downloads }) => ({ downloads });

const mapStateToDispatch = dispatch => ({});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
