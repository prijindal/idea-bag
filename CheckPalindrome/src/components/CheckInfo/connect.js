import { connect } from 'react-redux';

const mapStateToProps = ({ string }) => ({ string });

export default connect(mapStateToProps);
