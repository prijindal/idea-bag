import { connect } from 'react-redux';

const mapStateToProps = ({ data }) => ({ data });

export default connect(
  mapStateToProps,
);
