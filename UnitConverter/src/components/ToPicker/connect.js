import { connect } from 'react-redux';

const mapStateToProps = ({ group, to }) => ({ group, keyValue: to });

const mapStateToDispatch = dispatch => ({
  setKey: to =>
    dispatch({
      type: 'TO/SET',
      to,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
