import { connect } from 'react-redux';

const mapStateToProps = ({
  input1,
  input2,
}) => ({
  input1,
  input2,
});

export default connect(mapStateToProps);
