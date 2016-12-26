import { connect } from 'react-redux';

const mapStateToProps = ({
  amount,
  cost,
}) => ({
  amount,
  cost,
});

export default connect(mapStateToProps);
