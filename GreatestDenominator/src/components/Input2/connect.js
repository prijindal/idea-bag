import { connect } from 'react-redux';

const mapStateToProps = ({ input2 }) => ({ input2 });

const mapStateToDispatch = dispatch => ({
  setValue: value =>
    dispatch({
      type: 'INPUT2/SET',
      value,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
