import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  clear: () =>
    dispatch({ type: 'FLIP/CLEAR' }),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
);
