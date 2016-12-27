import { connect } from 'react-redux';

const mapStateToProps = ({ group, from }) => ({ group, keyValue: from });

const mapStateToDispatch = dispatch => ({
  setKey: from =>
    dispatch({
      type: 'FROM/SET',
      from,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
