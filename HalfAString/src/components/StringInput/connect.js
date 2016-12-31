import { connect } from 'react-redux';

const mapStateToProps = ({ string }) => ({ string });

const mapStateToDispatch = dispatch => ({
  setText: string =>
    dispatch({
      type: 'TEXT/SET',
      string,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
