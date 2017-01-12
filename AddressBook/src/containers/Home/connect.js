import { connect } from 'react-redux';

const mapStateToProps = ({ journals }) => ({ journals });

export default connect(
  mapStateToProps,
);
