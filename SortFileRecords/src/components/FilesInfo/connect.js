import { connect } from 'react-redux';

const mapStateTopProps = ({ sortby, directory }) => ({ sortby, directory });

export default connect(
  mapStateTopProps,
);
