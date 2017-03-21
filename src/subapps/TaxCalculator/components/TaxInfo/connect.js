import { connect } from 'react-redux';

const mapStateToProps = ({ amount }) => ({ amount });

export default connect(mapStateToProps);
