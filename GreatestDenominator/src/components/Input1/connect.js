import { connect } from 'react-redux';

const mapStateToProps = ({ input1 }) => ({ input1 });

const mapStateToDispatch = dispatch => ({
  setValue: value =>
    dispatch({
      type: 'INPUT1/SET',
      value,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
