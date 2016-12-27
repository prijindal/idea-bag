import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapStateToDispatch = dispatch => ({
  setValue: value =>
    dispatch({
      type: 'VALUE/SET',
      value,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
