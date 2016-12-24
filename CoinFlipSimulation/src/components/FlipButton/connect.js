import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  flipCoin: () =>
    dispatch({ type: 'FLIP/ADDNEW' }),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
);
