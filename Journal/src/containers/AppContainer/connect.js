import { connect } from 'react-redux';

const mapStateToProps = ({ email, loading }) => ({ email, loading });

export default connect(
  mapStateToProps,
);
