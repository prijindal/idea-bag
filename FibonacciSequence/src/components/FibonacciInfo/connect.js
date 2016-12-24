import { connect } from 'react-redux';

const mapStateToProps = ({ number }) => ({ number });

export default connect(mapStateToProps);
